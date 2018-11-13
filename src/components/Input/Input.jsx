// @flow
import React from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Input.module.scss';

/**
 * @visibleName Input
 */
const Input = ({
  label, type, id, name, value, placeholder, disabled, required, helper, valid, onChange, onFocus, onBlur, error, hidden, icon, reverse }: propTypes) => {

  const contentClass = cn(styles.content, {
    [styles.hasValue]: value,
    [styles.hasSuccess]: !!value && !!valid,
    [styles.reverse]: reverse && icon,
  });

  const labelStyle = cn({
    [styles.required]: required,
  });

  const inputStyle = cn({
    [styles.hasError]: error,
  });

  const handleIcon = () => (
    (!!value && !!valid && !reverse)
      ? <Icon name="check" size="32" className={styles.icon} />
      : icon
        ? <Icon name={icon} size="16" className={styles.icon} />
        : null
  );

  console.log(handleIcon());

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
          valid={valid}
          hidden={hidden}
        />
        <label htmlFor={id} className={labelStyle}>{label}</label>
        { handleIcon() }
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
  onChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  icon?: string,
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
  icon: '',
};

export default Input;
