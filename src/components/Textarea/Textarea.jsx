// @flow
import React from 'react';
import styles from './Textarea.module.scss';

/**
 * @visibleName Textarea
 */
const Textarea = ({
  placeholder, name, value, cols, rows, required, disabled, form, onChange,
}: propTypes) => (
  <textarea
    className={styles.textarea}
    placeholder={placeholder}
    name={name}
    value={value}
    cols={cols}
    rows={rows}
    required={required}
    disabled={disabled}
    form={form}
    onChange={onChange}
  />
);

type propTypes = {
  placeholder?: string,
  name: string,
  value?: string,
  cols?: string,
  rows?: string,
  required?: boolean,
  disabled?: boolean,
  form?: string,
  onChange: () => void,
};

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  cols: '20',
  rows: '5',
  required: false,
  disabled: false,
  form: '',
};

export default Textarea;
