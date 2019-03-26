/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { KEYMAP } from '../../constants/keymap';
import Input from '../Input';
import {
  BLUR_CLOSING_DELAY,
  HIGHLIGHT_TOP_MARGIN,
  MIN_NUMBER_OF_CHARACTERS,
  PREDICT_DEBOUNCE_DELAY,
} from './constants';
import Predictions from './Predictions';
import Status, { STATUS } from './Status';
import styles from './InputAutoComplete.module.scss';

/**
 * @visibleName InputAutoComplete
 */
export default class InputAutoComplete extends Component {
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

  constructor(props) {
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

  get status() {
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

  getPredictionTopOffset(prediction) {
    const { predictions } = this.state;
    const predictionIndex = predictions.indexOf(prediction);
    const predictionElem = this.private.predictionElemMap[predictionIndex];

    if (predictionElem === undefined) {
      throw new Error('Unable to retrieve prediction offset');
    }
    return predictionElem.offsetTop;
  }

  handleFocusIn = () => {
    const { value } = this.state;

    if (value.length > 0) {
      this.open();
    }
  };

  handleFocusOut = () => {
    const { showPredictions } = this.state;

    if (showPredictions) {
      // A delay is needed to avoid closing the panel before handling a click event
      setTimeout(() => this.close(), BLUR_CLOSING_DELAY);
    }
  };

  handleKeydown = event => {
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

  handleInput = event => {
    const { target } = event;

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

  handlePredictionMouseOver = prediction => {
    this.highlightPrediction(prediction, false);
  };

  selectPrediction = selectedPrediction => {
    const { onChange } = this.props;
    const { value } = selectedPrediction;

    this.setState({ showPredictions: false, value, selectedPrediction });

    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  highlightPrediction(prediction, scroll = true) {
    const scrollToPrediction = scroll
      ? () => this.scrollToPrediction(prediction)
      : undefined;

    this.setState({ highlightedPrediction: prediction }, scrollToPrediction);
  }

  open() {
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

  predict(value) {
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

  scrollToPrediction(prediction) {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }

    container.scrollTop =
      this.getPredictionTopOffset(prediction) - HIGHLIGHT_TOP_MARGIN;
  }

  scrollToTop() {
    const container = this.private.predictionsContainerRef.current;

    if (container === null) {
      throw new Error('Unable to retrieve reference of predictions container');
    }

    container.scrollTop = 0;
  }

  close() {
    this.setState({ showPredictions: false });
  }

  shouldRenderPredictions() {
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

InputAutoComplete.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  predict: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
  ]),
  translations: PropTypes.shape({
    keepTyping: PropTypes.string,
    noResult: PropTypes.string,
    unableToPredict: PropTypes.string,
  }),
  transNoResult: PropTypes.string,
  type: PropTypes.oneOf(['email', 'number', 'search', 'tel', 'text', 'url']),
  value: PropTypes.string,
};
