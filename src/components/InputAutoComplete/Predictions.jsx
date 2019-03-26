/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Prediction from './Prediction';

const Predictions = ({
  highlightedPrediction,
  highlightValue,
  onClick,
  onMouseOver,
  predictions = [],
  refCallback,
  selectedPrediction,
}) => (
  <ul>
    {predictions.map(prediction => {
      const { label, value } = prediction;
      const highlighted = prediction === highlightedPrediction;
      const onClickHandler = () => onClick && onClick(prediction);
      const onMouseOverHandler = () => onMouseOver && onMouseOver(prediction);
      const refCallbackHandler = elem =>
        refCallback && refCallback(prediction, elem);
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
    })}
  </ul>
);

Predictions.propTypes = {
  highlightedPrediction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  highlightValue: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  predictions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  refCallback: PropTypes.func,
  selectedPrediction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default Predictions;
