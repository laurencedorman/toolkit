/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import React from 'react';
import Prediction from './Prediction';
import type { PredictionType } from './prediction-type';

const Predictions = ({
  highlightedPrediction, highlightValue, onClick, onMouseOver, predictions, refCallback,
  selectedPrediction,
}: PropTypes) => (
  <ul>
    {
      // Flow does not manage default props
      ((predictions: any): PredictionType[]).map((prediction) => {
        const { label, value } = prediction;
        const highlighted = prediction === highlightedPrediction;
        const onClickHandler = () => onClick && onClick(prediction);
        const onMouseOverHandler = () => onMouseOver && onMouseOver(prediction);
        const refCallbackHandler = elem => refCallback && refCallback(prediction, elem);
        const selected = prediction === selectedPrediction;

        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <Prediction
            highlighted={highlighted}
            highlightValue={highlightValue}
            key={value}
            label={label}
            onClick={onClickHandler}
            onMouseOver={onMouseOverHandler}
            refCallback={refCallbackHandler}
            selected={selected}
            value={value}
          />
        );
      })
    }
  </ul>
);

type PropTypes = {
  highlightedPrediction?: PredictionType,
  highlightValue?: string,
  onClick?: (prediction: PredictionType) => void,
  onMouseOver?: (predictionIndex: number) => void,
  predictions?: PredictionType[],
  refCallback?: (prediction: PredictionType, element: HTMLElement) => void,
  selectedPrediction?: PredictionType,
};

Predictions.defaultProps = {
  highlightValue: undefined,
  highlightedPrediction: undefined,
  onClick: undefined,
  onMouseOver: undefined,
  predictions: [],
  refCallback: undefined,
  selectedPrediction: undefined,
};

export default Predictions;
