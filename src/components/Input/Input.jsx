// @flow
import React from 'react';
import cn from 'classnames';
import { Icon } from 'components';
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
  placeholder,
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
  icon,
  reverse,
  min,
  max,
  step,
  indicator,
  reset,
  dataQa,
}: propTypes) => {
  const container = cn(
    styles.container,
    className,
  );

  const contentClass = cn(styles.content, {
    [styles.hasValue]: value !== '',
    [styles.hasSuccess]: !error && value !== '' && !reset,
    [styles.reverse]: reverse && icon,
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
          className={inputStyle}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          hidden={hidden}
          min={min}
          max={max}
          step={step}
          aria-required={required}
          aria-label={label && label}
          aria-hidden={type === 'hidden'}
          data-qa={dataQa}
        />
        {label
          && <label htmlFor={id} className={labelStyle}>{label}</label>}
        { handleIcon(error, value, reverse, reset, icon) }
        { handleIndicator(indicator, icon) }
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
  /* eslint-enable jsx-a11y/label-has-for */
  );
};

export type propTypes = {
  className?: string,
  label: string,
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search' | 'hidden',
  id: string,
  name: string,
  value?: string,
  placeholder?: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  disabled?: boolean,
  error?: boolean,
  messageError?: string,
  helper?: string,
  hidden?: boolean,
  onChange?: (event: SyntheticEvent<HTMLInputElement>) => void,
  onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void,
  onKeyDown?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
  onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void,
  icon?: string,
  reverse?: boolean,
  min?: number,
  max?: number,
  step?: number | 'any',
  indicator?: string,
  dataQa?: string,
};

Input.defaultProps = {
  className: '',
  value: '',
  placeholder: '',
  required: false,
  minLength: null,
  maxLength: null,
  disabled: false,
  helper: '',
  error: false,
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
};

/* eslint-disable no-nested-ternary */
const handleIcon = (error, value, reverse, reset, icon) => (
  (!error && value !== '' && !reverse && !reset)
    ? <Icon name="check" size="22" className={styles.icon} />
    : icon
      ? <Icon name={icon} size="16" className={styles.icon} />
      : null
);

const handleIndicator = (indicator, icon) => (
  (indicator && !icon)
    && <span className={styles.indicator}>{indicator}</span>
);
/* eslint-enable no-nested-ternary */

export default Input;
