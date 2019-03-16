import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Textarea.module.scss';

/**
 * @visibleName Textarea
 */
const Textarea = ({
  placeholder, name, value, cols, rows, required, disabled, form, onChange, className, dataQa,
}) => {
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
      data-qa={dataQa}
    />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  cols: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.any,
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.any,
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  cols: '20',
  rows: '5',
  required: false,
  disabled: false,
  onChange: null,
  form: '',
  className: '',
  dataQa: '',
};

export default Textarea;
