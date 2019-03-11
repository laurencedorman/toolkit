import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Textarea.module.scss';

/**
 * @visibleName Textarea
 */
const Textarea = ({
  placeholder,
  label,
  id,
  name,
  value,
  cols,
  rows,
  required,
  disabled,
  form,
  onChange,
  className,
  dataQa,
  error,
  messageError,
  valid,
  helper,
}) => {
  const container = cn(
    styles.container,
    className,
  );

  const content = cn(styles.content, {
    [styles.hasValue]: value !== '',
    [styles.hasSuccess]: valid,
  });

  const textarea = cn(
    styles.textarea,
    { [styles.hasError]: error },
  );

  const labelCn = cn({
    [styles.required]: required,
  });
  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <div className={container}>
      <div className={content}>
        <textarea
          id={id}
          className={textarea}
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
        {label
          && <label htmlFor={id} className={labelCn}>{label}</label>}
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
    /* eslint-enable jsx-a11y/label-has-for */
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
  label: '',
  id: '',
  value: '',
  cols: '20',
  rows: '5',
  required: false,
  disabled: false,
  onChange: null,
  form: '',
  className: '',
  dataQa: '',
  valid: false,
  error: false,
  messageError: '',
  helper: '',
};

export default Textarea;
