import React from 'react';
import styles from './InputCheck.module.scss';

const InputCheck = ({ type, id, name, disabled, checked, onChange, label }: PropTypes) => (
  <div className={styles.manoolkitInputCheck}>
    <input
      type={type}
      id={id}
      value={id}
      name={name}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

type PropTypes = {
  type: Array<"checkbox", "radio">,
  id: string,
  name: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: () => {},
  label: string,
};

InputCheck.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
};

export default InputCheck;
