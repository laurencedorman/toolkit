// @flow
import React from 'react';
import cn from 'classnames';
import { highlight } from './helpers';
import styles from './Prediction.module.scss';

const Prediction = ({
  highlighted, highlightValue, label, onClick, onFocus, onKeyDown, onMouseOver, refCallback,
  selected, value,
}: PropTypes) => {
  const className = cn(styles.prediction, {
    [styles.highlighted]: highlighted,
    [styles.selected]: selected,
  });
  const refHandler = (elem: HTMLElement | null) => refCallback && elem && refCallback(elem);

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
      {
        highlight(value, highlightValue)
          .map(({ strong, text }) => (
            <span key={`${strong.toString()}${text}`}>
              {strong ? <mark>{text}</mark> : <span>{text}</span>}
            </span>
          ))
      }
      {label ? <span>{` - ${label}`}</span> : ''}
    </li>
  );
};

type PropTypes = {
  highlighted?: boolean,
  highlightValue?: string,
  label?: string,
  onClick?: (event: SyntheticEvent<HTMLLIElement>) => void,
  onFocus?: (event: SyntheticEvent<HTMLLIElement>) => void,
  onKeyDown?: (event: SyntheticKeyboardEvent<HTMLLIElement>) => void,
  onMouseOver?: (event: SyntheticEvent<HTMLLIElement>) => void,
  refCallback?: (element: HTMLElement | null) => void,
  selected?: boolean,
  value: string,
};

Prediction.defaultProps = {
  highlighted: false,
  highlightValue: '',
  label: undefined,
  onClick: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  onMouseOver: undefined,
  refCallback: undefined,
  selected: false,
};

export default Prediction;
