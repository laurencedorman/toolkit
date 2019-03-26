/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { highlight } from './helpers';
import styles from './Prediction.module.scss';

const Prediction = ({
  highlighted = false,
  highlightValue = '',
  label,
  onClick,
  onFocus,
  onKeyDown,
  onMouseOver,
  refCallback,
  selected = false,
  value,
}) => {
  const className = cn(styles.prediction, {
    [styles.highlighted]: highlighted,
    [styles.selected]: selected,
  });
  const refHandler = elem => refCallback && elem && refCallback(elem);

  return (
    <li
      aria-selected={selected}
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onMouseOver={onMouseOver}
      ref={refHandler}
      role="option"
    >
      {highlight(value, highlightValue).map(({ strong, text }) => (
        <span key={`${strong.toString()}${text}`}>
          {strong ? <mark>{text}</mark> : <span>{text}</span>}
        </span>
      ))}
      {label ? <span>{` - ${label}`}</span> : ''}
    </li>
  );
};

Prediction.propTypes = {
  highlighted: PropTypes.bool,
  highlightValue: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMouseOver: PropTypes.func,
  refCallback: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.string,
};

export default Prediction;
