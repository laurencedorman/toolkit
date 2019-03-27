/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import IconCheck from '../Icon/Icons/IconCheck';
import styles from './Input.module.scss';

/**
 * @visibleName Input
 */
const Input = ({
  className,
  label,
  type,
  id,
  name,
  value,
  disabled,
  required,
  minLength,
  maxLength,
  helper,
  onChange,
  onFocus,
  onKeyDown,
  onBlur,
  error,
  messageError,
  hidden,
  iconComponent,
  reverse,
  min,
  max,
  step,
  indicator,
  valid,
  reset,
  dataQa,
  autoComplete,
}) => {
  const container = cn(
    styles.container,
    className,
  );

  const contentClass = cn(styles.content, {
    [styles.hasValue]: value !== '',
    [styles.hasSuccess]: valid,
    [styles.reverse]: reverse && iconComponent,
  });

  const labelStyle = cn({
    [styles.required]: required,
  });

  const inputStyle = cn({
    [styles.hasError]: error,
    [styles.hasIndicator]: indicator,
  });

  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <div className={container}>
      <div className={contentClass}>
        <input
          id={id}
          className={inputStyle}
          type={type}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          hidden={hidden}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          min={min}
          max={max}
          step={step}
          autoComplete={autoComplete}
          aria-required={required}
          aria-label={label && label}
          aria-hidden={type === 'hidden'}
          data-qa={dataQa}
        />
        {label
          && <label htmlFor={id} className={labelStyle}>{label}</label>}
        { handleIcon(iconComponent, valid, reset) }
        { handleIndicator(indicator, iconComponent) }
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
    /* eslint-enable jsx-a11y/label-has-for */
  );
};

/* eslint-disable no-nested-ternary */
const handleIcon = (iconComponent, valid, reset) => (
  valid
    ? <Icon component={IconCheck} size="22" className={styles.icon} />
    : (iconComponent && !reset)
      ? <Icon component={iconComponent} size="16" className={styles.icon} />
      : null
);

const handleIndicator = (indicator, iconComponent) =>
  indicator && !iconComponent && <span className={styles.indicator}>{indicator}</span>;
/* eslint-enable no-nested-ternary */

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'search',
    'hidden',
  ]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  messageError: PropTypes.string,
  helper: PropTypes.string,
  hidden: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  reverse: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.bool,
  indicator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  dataQa: PropTypes.string,
  reset: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  label: '',
  value: '',
  required: false,
  minLength: null,
  maxLength: null,
  disabled: false,
  helper: '',
  error: false,
  valid: false,
  messageError: '',
  hidden: false,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onBlur: null,
  icon: '',
  reverse: false,
  min: null,
  max: null,
  step: null,
  indicator: null,
  dataQa: '',
  reset: false,
};

export default Input;
