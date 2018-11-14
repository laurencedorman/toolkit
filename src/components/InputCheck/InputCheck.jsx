// @flow
import React from 'react';
import styles from './InputCheck.module.scss';

const InputCheck = ({
  type, value, name, disabled, checked, onChange, label,
}: PropTypes) => (
  /* eslint-disable jsx-a11y/label-has-for */
  <div className={styles.inputCheck}>
    <input
      type={type}
      id={value}
      value={value}
      name={name}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <label htmlFor={value}>{label}</label>
  </div>
  /* eslint-enable jsx-a11y/label-has-for */
);

type PropTypes = {
  type: 'radio' | 'checkbox',
  value: string,
  name: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: (Event) => void,
  label: string,
};

InputCheck.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
};

export default InputCheck;
