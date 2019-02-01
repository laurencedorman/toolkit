// @flow
import cn from 'classnames';
import React, { Component } from 'react';
import Input from '../Input';
import type { InputProps } from '../Input';
import {
  BLUR_CLOSING_DELAY, HIGHLIGHT_TOP_MARGIN, KEYMAP, MIN_NUMBER_OF_CHARACTERS,
  PREDICT_DEBOUNCE_DELAY, STATUS,
} from './constants';
import type { Prediction } from './constants';
import styles from './InputAutoComplete.module.scss';
import Predictions from './Predictions';
import Status from './Status';

type Private = {
  inputRef: { current: null | HTMLInputElement },
  predictionsContainerRef: { current: null | HTMLDivElement },
  predictTimeout: number | null,
};

type Props = InputProps & {
  autocomplete: Prediction[] | () => Promise<Prediction[]>,
  className?: string,
  onChange?: (value: string) => void,
  transKeepTyping?: string,
  transNoResult?: string,
  value?: string,
};

type State = {
  errorMessage: string | null,
  highlightedPrediction: Prediction | null,
  loading: boolean,
  showPredictions: boolean,
  predictions: Prediction[],
  selectedPrediction: Prediction | null,
  value: string,
};

/**
 * @visibleName InputAutoComplete
 */
export default class InputAutoComplete extends Component<Props, State> {
  static defaultProps = {
    autocomplete: [],
    className: '',
    onChange: undefined,
    transKeepTyping: undefined,
    transNoResult: undefined,
    value: '',
  };

  private: Private = {
    inputRef: { current: null },
    predictionsContainerRef: React.createRef(),
    predictTimeout: null,
  };

  // eslint-disable-next-line react/sort-comp
  state: State;

  constructor(props: Props) {
    super(props);

    (this: any).handleFocusIn = this.handleFocusIn.bind(this);
    (this: any).handleFocusOut = this.handleFocusOut.bind(this);
    (this: any).handleKeydown = this.handleKeydown.bind(this);
    (this: any).handleInput = this.handleInput.bind(this);
    (this: any).handlePredictionMouseOver = this.handlePredictionMouseOver.bind(this);
    (this: any).selectPrediction = this.selectPrediction.bind(this);

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

  handleFocusIn(): void {
    const { value } = this.state;

    if (value.length > 0) {
      this.open();
    }
  }

  handleFocusOut(): void {
    const { showPredictions } = this.state;

    if (showPredictions) {
      // A delay is needed to avoid closing the panel before handling a click event
      setTimeout(() => this.close(), BLUR_CLOSING_DELAY);
    }
  }

  handleKeydown(event: SyntheticKeyboardEvent<HTMLInputElement>): void {
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
        newIndex = currentIndex > -1 && currentIndex < (predictions.length - 1)
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
  }

  handleInput(event: SyntheticEvent<HTMLInputElement>): Promise<void> {
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
      .then(predictions => new Promise(
        resolve => this.setState({ loading: false, predictions }, resolve),
      ))
      .then(() => {
        const { predictions } = this.state;

        if (predictions.length > 0) {
          this.highlightPrediction(predictions[0]);
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: 'Unable to predict :(', loading: false });
        this.close();
        throw error;
      });
  }

  handlePredictionMouseOver(prediction: Prediction): void {
    this.highlightPrediction(prediction, false);
  }

  close(): void {
    this.setState({ showPredictions: false });
  }

  highlightPrediction(prediction: Prediction, scroll: boolean = true): void {
    const scrollToPrediction = scroll
      ? () => this.scrollToPrediction(prediction)
      : undefined;

    this.setState({ highlightedPrediction: prediction }, scrollToPrediction);
  }

  open(): void {
    const { predictions, value } = this.state;

    this.setState({ showPredictions: true });

    if (this.shouldRenderPredictions()) {
      const prediction = predictions.find(p => p.value.indexOf(value) === 0);

      if (prediction) {
        this.highlightPrediction(prediction);
      }
    }
  }

  predict(value: string): Promise<string[]> {
    const { autocomplete } = this.props;
    let predictionPromise = Promise.resolve([]);

    if (value.length >= MIN_NUMBER_OF_CHARACTERS) {
      if (Array.isArray(autocomplete)) {
        predictionPromise = Promise.resolve(
          autocomplete.filter(prediction => prediction.value.indexOf(value) === 0),
        );
      } else if (typeof autocomplete === 'function') {
        predictionPromise = new Promise((resolve, reject) => {
          if (this.private.predictTimeout) {
            window.clearTimeout(this.private.predictTimeout);
          }

          this.private.predictTimeout = window.setTimeout(() => {
            this.private.predictTimeout = null;
            try {
              autocomplete(value)
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

  scrollToPrediction(prediction: Prediction): void {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }
    if (prediction.getTopOffset === undefined) {
      throw new Error('Unable to retrieve prediction offset');
    }

    container.scrollTop = prediction.getTopOffset() - HIGHLIGHT_TOP_MARGIN;
  }

  scrollToTop(): void {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }

    container.scrollTop = 0;
  }

  selectPrediction(selectedPrediction: Prediction): void {
    const { onChange } = this.props;
    const { value } = selectedPrediction;

    this.setState({ showPredictions: false, value, selectedPrediction });

    if (typeof onChange === 'function') {
      onChange(value);
    }
  }

  shouldRenderPredictions(): boolean {
    const { state: { predictions }, status } = this;
    return ![STATUS.KEEP_TYPING, STATUS.NO_RESULT].includes(status) && predictions.length > 0;
  }

  render() {
    const { props, state, status } = this;
    const { transKeepTyping, transNoResult } = props;
    const {
      errorMessage, highlightedPrediction, predictions, selectedPrediction, showPredictions, value,
    } = state;
    const container = cn(styles.container, props.className);

    return (
      <div className={container}>
        {
          showPredictions && (
            <div className={styles.predictionsContainer} ref={this.private.predictionsContainerRef}>
              {status && (
                <Status
                  status={status}
                  transKeepTyping={transKeepTyping}
                  transNoResult={transNoResult}
                />
              )}
              {this.shouldRenderPredictions() && (
                // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                <Predictions
                  highlightedPrediction={highlightedPrediction}
                  highlightValue={value}
                  onClick={this.selectPrediction}
                  onMouseOver={this.handlePredictionMouseOver}
                  predictions={predictions}
                  selectedPrediction={selectedPrediction}
                />
              )}
            </div>
          )
        }
        <Input
          {...props}
          error={!!errorMessage}
          onBlur={this.handleFocusOut}
          onChange={this.handleInput}
          onFocus={this.handleFocusIn}
          onKeyDown={this.handleKeydown}
          messageError={errorMessage}
          type="text"
          value={value}
        />
      </div>
    );
  }
}
