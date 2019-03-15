// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import { KEYMAP } from '../../constants/keymap';
import Input from '../Input';
import type { InputProps } from '../Input';
import {
  BLUR_CLOSING_DELAY,
  HIGHLIGHT_TOP_MARGIN,
  MIN_NUMBER_OF_CHARACTERS,
  PREDICT_DEBOUNCE_DELAY,
} from './constants';
import type { PredictionType } from './prediction-type';
import Predictions from './Predictions';
import Status, { STATUS } from './Status';
import styles from './InputAutoComplete.module.scss';

type PrivateType = {
  predictionElemMap: { [predictionIndex: number]: HTMLElement },
  predictionsContainerRef: { current: null | HTMLDivElement },
  predictTimeout: number | null,
};

type PropTypes = InputProps & {
  className?: string,
  onChange?: (value: string) => void,
  predict: PredictionType[] | (() => Promise<PredictionType[]>),
  translations?: {
    keepTyping: string,
    noResult: string,
    unableToPredict: string,
  },
  transNoResult?: string,
  type: 'email' | 'number' | 'search' | 'tel' | 'text' | 'url',
  value?: string,
};

type StateType = {
  errorMessage: string | null,
  highlightedPrediction: PredictionType | null,
  loading: boolean,
  showPredictions: boolean,
  predictions: PredictionType[],
  selectedPrediction: PredictionType | null,
  value: string,
};

/**
 * @visibleName InputAutoComplete
 */
export default class InputAutoComplete extends Component<PropTypes, StateType> {
  static defaultProps = {
    className: '',
    onChange: undefined,
    predict: [],
    translations: {
      keepTyping: undefined,
      noResult: undefined,
      unableToPredict: 'Unable to predict :(',
    },
    value: '',
  };

  // eslint-disable-next-line react/sort-comp
  private: PrivateType;

  // eslint-disable-next-line react/sort-comp
  state: StateType;

  constructor(props: PropTypes) {
    super(props);

    this.private = {
      predictionElemMap: {},
      predictionsContainerRef: React.createRef(),
      predictTimeout: null,
    };

    this.state = {
      errorMessage: null,
      highlightedPrediction: null,
      loading: false,
      predictions: [],
      selectedPrediction: null,
      showPredictions: false,
      value: props.value,
    };
  }

  get status(): string | null {
    const { loading, predictions, value } = this.state;

    if (value.length < MIN_NUMBER_OF_CHARACTERS) {
      return STATUS.KEEP_TYPING;
    }
    if (loading) {
      return STATUS.LOADING;
    }
    if (predictions.length === 0) {
      return STATUS.NO_RESULT;
    }

    return null;
  }

  getPredictionTopOffset(prediction: PredictionType): number {
    const { predictions } = this.state;
    const predictionIndex = predictions.indexOf(prediction);
    const predictionElem = this.private.predictionElemMap[predictionIndex];

    if (predictionElem === undefined) {
      throw new Error('Unable to retrieve prediction offset');
    }
    return predictionElem.offsetTop;
  }

  handleFocusIn = (): void => {
    const { value } = this.state;

    if (value.length > 0) {
      this.open();
    }
  };

  handleFocusOut = (): void => {
    const { showPredictions } = this.state;

    if (showPredictions) {
      // A delay is needed to avoid closing the panel before handling a click event
      setTimeout(() => this.close(), BLUR_CLOSING_DELAY);
    }
  };

  handleKeydown = (event: SyntheticKeyboardEvent<HTMLInputElement>): void => {
    const { showPredictions } = this.state;
    const key = event.charCode || event.keyCode;

    // Opens the predictions container
    if (!showPredictions) {
      if ([KEYMAP.ENTER, KEYMAP.UP_ARROW, KEYMAP.DOWN_ARROW].includes(key)) {
        event.preventDefault();
        this.open();
      }
      return;
    }

    // Closes the predictions container
    if (key === KEYMAP.ESCAPE) {
      event.preventDefault();
      this.close();
      return;
    }

    if (!this.shouldRenderPredictions()) {
      return;
    }

    const { highlightedPrediction, predictions } = this.state;
    const currentIndex = predictions.indexOf(highlightedPrediction);
    let newIndex;

    // Navigates between predictions
    switch (key) {
      case KEYMAP.ENTER: {
        event.preventDefault();

        if (highlightedPrediction) {
          this.selectPrediction(highlightedPrediction);
          return;
        }
        break;
      }

      case KEYMAP.DOWN_ARROW:
        newIndex =
          currentIndex > -1 && currentIndex < predictions.length - 1
            ? currentIndex + 1
            : 0;
        break;

      case KEYMAP.UP_ARROW:
        newIndex = currentIndex > 0 ? currentIndex - 1 : predictions.length - 1;
        break;

      case KEYMAP.PAGE_UP:
      case KEYMAP.HOME:
        newIndex = 0;
        break;

      case KEYMAP.PAGE_DOWN:
      case KEYMAP.END:
        newIndex = predictions.length - 1;
        break;

      default:
      // Does nothing
    }

    if (newIndex !== undefined) {
      event.preventDefault();
      this.highlightPrediction(predictions[newIndex]);
    }
  };

  handleInput = (event: SyntheticEvent<HTMLInputElement>): Promise<void> => {
    const { target }: any = event;

    if (target.value === undefined) {
      throw new Error('Invalid event target');
    }

    const { value } = target;
    const { showPredictions } = this.state;

    this.setState({
      errorMessage: null,
      value,
    });

    if (value.length === 0) {
      return Promise.resolve();
    }

    if (!showPredictions) {
      this.open();
    } else {
      this.scrollToTop();
    }

    if (value.length < MIN_NUMBER_OF_CHARACTERS) {
      return Promise.resolve();
    }

    this.setState({ loading: true });

    return this.predict(value)
      .then(
        predictions =>
          new Promise(resolve =>
            this.setState({ loading: false, predictions }, resolve)
          )
      )
      .then(() => {
        const { predictions } = this.state;

        if (this.shouldRenderPredictions()) {
          this.highlightPrediction(predictions[0]);
        }
      })
      .catch(() => {
        const {
          translations: { unableToPredict },
        } = this.props;
        this.setState({ errorMessage: unableToPredict, loading: false });
        this.close();
      });
  };

  handlePredictionMouseOver = (prediction: PredictionType): void => {
    this.highlightPrediction(prediction, false);
  };

  selectPrediction = (selectedPrediction: PredictionType): void => {
    const { onChange } = this.props;
    const { value } = selectedPrediction;

    this.setState({ showPredictions: false, value, selectedPrediction });

    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  highlightPrediction(
    prediction: PredictionType,
    scroll: boolean = true
  ): void {
    const scrollToPrediction = scroll
      ? () => this.scrollToPrediction(prediction)
      : undefined;

    this.setState({ highlightedPrediction: prediction }, scrollToPrediction);
  }

  open(): void {
    const { predictions, value } = this.state;

    this.setState({ showPredictions: true }, () => {
      if (this.shouldRenderPredictions()) {
        const prediction = predictions.find(p => p.value.indexOf(value) === 0);

        if (prediction) {
          this.highlightPrediction(prediction);
        }
      }
    });
  }

  predict(value: string): Promise<string[]> {
    const { predict } = this.props;
    let predictionPromise = Promise.resolve([]);

    if (value.length >= MIN_NUMBER_OF_CHARACTERS) {
      if (Array.isArray(predict)) {
        predictionPromise = Promise.resolve(
          predict.filter(prediction => prediction.value.indexOf(value) === 0)
        );
      } else if (typeof predict === 'function') {
        predictionPromise = new Promise((resolve, reject) => {
          if (this.private.predictTimeout) {
            window.clearTimeout(this.private.predictTimeout);
          }

          this.private.predictTimeout = window.setTimeout(() => {
            this.private.predictTimeout = null;
            try {
              predict(value)
                .then(resolve)
                .catch(reject);
            } catch (error) {
              reject(error);
            }
          }, PREDICT_DEBOUNCE_DELAY);
        });
      }
    }

    return predictionPromise;
  }

  scrollToPrediction(prediction: PredictionType): void {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }

    container.scrollTop =
      this.getPredictionTopOffset(prediction) - HIGHLIGHT_TOP_MARGIN;
  }

  scrollToTop(): void {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }

    container.scrollTop = 0;
  }

  close(): void {
    this.setState({ showPredictions: false });
  }

  shouldRenderPredictions(): boolean {
    const { predictions, showPredictions } = this.state;

    return (
      showPredictions &&
      predictions.length > 0 &&
      ![STATUS.KEEP_TYPING, STATUS.NO_RESULT].includes(this.status)
    );
  }

  render() {
    // Some properties are unused but it is needed to avoid giving props of this component to the
    // Input component
    const {
      className,
      onChange,
      predict,
      translations,
      value,
      ...rest
    } = this.props;
    const { state, status } = this;
    const {
      errorMessage,
      highlightedPrediction,
      predictions,
      selectedPrediction,
      showPredictions,
    } = state;
    const currentValue = state.value;
    const container = cn(styles.container, className);
    const { keepTyping, noResult } = translations;
    const statusTranslations =
      keepTyping && noResult ? { keepTyping, noResult } : undefined;
    const refCallbackHandler = (prediction, elem) => {
      const predictionIndex = predictions.indexOf(prediction);
      this.private.predictionElemMap[predictionIndex] = elem;
    };

    this.private.predictionElemMap = {};

    return (
      <div className={container}>
        {showPredictions && (
          <div
            className={styles.predictionsContainer}
            ref={this.private.predictionsContainerRef}
          >
            {status && (
              <Status status={status} translations={statusTranslations} />
            )}
            {this.shouldRenderPredictions() && (
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              <Predictions
                highlightedPrediction={highlightedPrediction}
                highlightValue={value}
                onClick={this.selectPrediction}
                onMouseOver={this.handlePredictionMouseOver}
                predictions={predictions}
                refCallback={refCallbackHandler}
                selectedPrediction={selectedPrediction}
              />
            )}
          </div>
        )}
        <Input
          {...rest}
          error={!!errorMessage}
          onBlur={this.handleFocusOut}
          onChange={this.handleInput}
          onFocus={this.handleFocusIn}
          onKeyDown={this.handleKeydown}
          messageError={errorMessage}
          value={currentValue}
        />
      </div>
    );
  }
}
