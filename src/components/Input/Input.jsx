import React from 'react';
import styles from './Input.module.scss';

/**
 * @visibleName Input
 */
const Input = ({
  label, type, id, name, value, placeholder, disabled, required, helper, valid, onChange, onFocus, onBlur, error, hidden }: propTypes) => {

  const hasValue = value && 'hasValue';
  const hasError = error && 'hasError';
  const hasSuccess = (value && valid) && 'hasSuccess';
  const isRequired = required && 'required';

  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles[hasValue]} ${styles[hasSuccess]}`}>
        <input
          className={styles[hasError]}
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
          valid={valid}
          hidden={hidden}
        />
        <label htmlFor={id} className={styles[isRequired]}>{label}</label>
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
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
  valid?: boolean,
  error?: boolean,
  helper?: string,
  hidden?: boolean,
  onChange?: () => {},
  onFocus?: () => {},
  onBlur?: () => {},
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
  helper: '',
  valid: false,
  error: false,
  hidden: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
};

export default Input;
