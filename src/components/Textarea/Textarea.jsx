// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';

/**
 * @visibleName Textarea
 */
const Textarea = ({
  placeholder, name, value, cols, rows, required, disabled, form, onChange, className,
}: propTypes) => {
  const classNames = cn(
    styles.textarea,
    className,
  );

  return (
    <textarea
      className={classNames}
      placeholder={placeholder}
      name={name}
      value={value}
      cols={cols}
      rows={rows}
      required={required}
      disabled={disabled}
      form={form}
      onChange={onChange}
      aria-multiline="true"
      aria-required={required}
    />
  );
};

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
  className?: string,
};

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  cols: '20',
  rows: '5',
  required: false,
  disabled: false,
  form: '',
  className: '',
};

export default Textarea;
