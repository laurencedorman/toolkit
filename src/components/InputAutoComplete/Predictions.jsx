// @flow
import React from 'react';
import type { Prediction as PredictionType } from './constants';
import Prediction from './Prediction';

const Predictions = ({
  highlightedPrediction, highlightValue, onClick, onMouseOver, predictions, selectedPrediction,
}: Props) => (
  <ul>
    {
      // Flow does not manage default props
      ((predictions: any): PredictionType[]).map((prediction) => {
        const { label, value } = prediction;
        const highlighted = prediction === highlightedPrediction;
        const selected = prediction === selectedPrediction;

        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <Prediction
            highlighted={highlighted}
            highlightValue={highlightValue}
            key={value}
            label={label}
            onClick={() => onClick && onClick(prediction)}
            onMouseOver={() => onMouseOver && onMouseOver(prediction)}
            // I do not like this but I did not find any proper way until now
            /* eslint-disable-next-line no-param-reassign */
            refCallback={(elem) => { prediction.getTopOffset = () => elem.offsetTop; }}
            selected={selected}
            value={value}
          />
        );
      })
    }
  </ul>
);

type Props = {
  highlightedPrediction?: PredictionType,
  highlightValue?: string,
  onClick?: (prediction: PredictionType) => void,
  onMouseOver?: (predictionIndex: number) => void,
  predictions?: PredictionType[],
  selectedPrediction?: PredictionType,
};

Predictions.defaultProps = {
  highlightValue: undefined,
  highlightedPrediction: undefined,
  onClick: undefined,
  onMouseOver: undefined,
  predictions: [],
  selectedPrediction: undefined,
};

export default Predictions;
