// @flow
import React from 'react';
import cn from 'classnames';
import { Icon } from 'components';
import styles from './InputCheck.module.scss';

/**
 * @visibleName Checkbox & Radio
 */

const InputCheck = ({
  type,
  value,
  name,
  disabled,
  required,
  checked,
  onChange,
  error,
  messageError,
  label,
  className,
  itemId,
  dataQa,
}: PropTypes) => {
  const container = cn(
    styles.container,
    className,
  );

  const classNames = cn(
    styles.inputCheck,
    className,
    { [styles.noLabel]: !label, [styles.required]: required },
  );

  return (
    /* eslint-disable jsx-a11y/label-has-for */
    <div className={container}>
      <div className={classNames}>
        <input
          type={type}
          id={value}
          value={value}
          name={name}
          checked={checked}
          required={required}
          disabled={disabled}
          onChange={onChange}
          data-itemid={itemId}
          data-qa={dataQa}
          aria-describedby={label}
        />
        <label htmlFor={value}>
          {label && label}
          {checked && type === 'checkbox'
            ? <Icon name="check" className={styles.icon} size="18" />
            : null}
        </label>
      </div>
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
    /* eslint-enable jsx-a11y/label-has-for */
  );
};

type PropTypes = {
  type: 'radio' | 'checkbox',
  value: string,
  name: string,
  checked?: boolean,
  required?: boolean,
  disabled?: boolean,
  onChange?: (Event) => void,
  error?: boolean,
  messageError?: string,
  label?: string,
  className?: string,
  dataQa?: string,
  itemId?: string,
};

InputCheck.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
  onChange: null,
  error: false,
  messageError: '',
  label: '',
  className: '',
  dataQa: '',
  itemId: '',
};

export default InputCheck;
