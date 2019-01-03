// @flow
import React from 'react';
import cn from 'classnames';
import { Icon } from 'components';
import styles from './Input.module.scss';

/**
 * @visibleName Input
 */
const Input = ({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  disabled,
  required,
  helper,
  onChange,
  onFocus,
  onBlur,
  error,
  messageError,
  hidden,
  icon,
  reverse,
  min,
  max,
  indicator,
}: propTypes) => {
  const contentClass = cn(styles.content, {
    [styles.hasValue]: value !== '',
    [styles.hasSuccess]: !error && value !== '',
    [styles.reverse]: reverse && icon,
  });

  const labelStyle = cn({
    [styles.required]: required,
  });

  const inputStyle = cn({
    [styles.hasError]: error,
    [styles.hasIndicator]: indicator,
  });

  /* eslint-disable no-nested-ternary */
  const handleIcon = () => (
    (!error && value !== '' && !reverse)
      ? <Icon name="check" size="22" className={styles.icon} />
      : icon
        ? <Icon name={icon} size="16" className={styles.icon} />
        : null
  );

  const handleIndicator = () => (
    (indicator && !icon)
      && <span className={styles.indicator}>{indicator}</span>
  );
  /* eslint-enable no-nested-ternary */

  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <div className={styles.container}>
      <div className={contentClass}>
        <input
          className={inputStyle}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          hidden={hidden}
          min={min}
          max={max}
        />
        <label htmlFor={id} className={labelStyle}>{label}</label>
        { handleIcon() }
        { handleIndicator() }
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
  /* eslint-enable jsx-a11y/label-has-for */
  );
};


type propTypes = {
  label: string,
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search' | 'hidden',
  id: string,
  name: string,
  value?: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
  error?: boolean,
  messageError?: string,
  helper?: string,
  hidden?: boolean,
  onChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  icon?: string,
  reverse?: boolean,
  min?: number,
  max?: number,
  indicator?: string
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
  helper: '',
  error: false,
  messageError: '',
  hidden: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
  icon: '',
  reverse: false,
  min: null,
  max: null,
  indicator: null,
};

export default Input;
