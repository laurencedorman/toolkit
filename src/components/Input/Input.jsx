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


const Input = React.forwardRef(({
  autoComplete,
  className,
  dataQa,
  disabled,
  error,
  helper,
  hidden,
  iconComponent,
  id,
  indicator,
  label,
  max,
  maxLength,
  messageError,
  min,
  minLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  required,
  reset,
  reverse,
  step,
  touched,
  type,
  valid,
  value,
}, ref) => {
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

  return (
    <div className={container}>
      <div className={contentClass}>
        <input
          ref={ref}
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
        { handleIcon(iconComponent, valid, reset, touched) }
        { handleIndicator(indicator, iconComponent) }
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
  );
});

const handleIcon = (iconComponent, valid, reset, touched) => (
  valid && touched
    ? <Icon component={IconCheck} size="22" className={styles.icon} />
    : (iconComponent && !reset)
      ? <Icon component={iconComponent} size="16" className={styles.icon} />
      : null
);

const handleIndicator = (indicator, iconComponent) =>
  indicator && !iconComponent && <span className={styles.indicator}>{indicator}</span>;


Input.propTypes = {
  className: PropTypes.string,
  dataQa: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helper: PropTypes.string,
  hidden: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  id: PropTypes.string,
  indicator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  messageError: PropTypes.string,
  min: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  reset: PropTypes.bool,
  reverse: PropTypes.bool,
  step: PropTypes.bool,
  touched: PropTypes.bool,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'search',
    'hidden',
  ]).isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  className: undefined,
  dataQa: '',
  disabled: false,
  error: false,
  helper: '',
  hidden: false,
  icon: '',
  id: null,
  indicator: null,
  label: '',
  max: null,
  maxLength: null,
  messageError: '',
  min: null,
  minLength: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  required: false,
  reset: false,
  reverse: false,
  step: null,
  touched: true,
  valid: false,
  value: '',
};

export default Input;
