import React from 'react';
import styles from './Textarea.module.scss';

/**
 * * @version 1.0.0
 * @visibleName ManoolKit Textarea
 */
const Textarea = ({
  placeholder, name, id, value, cols, rows, required, disabled, readOnly, form, onChange }: PropTypes) => (
  <textarea
    className={styles.manoolkitTextarea}
    placeholder={placeholder}
    name={name}
    id={id}
    value={value}
    cols={cols}
    rows={rows}
    required={required}
    readOnly={readOnly}
    disabled={disabled}
    form={form}
    onChange={onChange}
  />
);

type PropTypes = {
  placeholder?: string,
  name: string,
  id: string,
  value?: string,
  cols?: string,
  rows?: string,
  required?: boolean,
  readOnly?: boolean,
  disabled?: boolean,
  form?: 'sting',
  onChange: () => {},
};

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  cols: '30',
  rows: '10',
  required: false,
  readOnly: false,
  disabled: false,
  form:'',
  onChange: null,
};

export default Textarea;
