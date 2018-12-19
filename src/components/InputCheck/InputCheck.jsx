// @flow
import React from 'react';
import cn from 'classnames';
import { Icon } from 'components';
import styles from './InputCheck.module.scss';

/**
 * @visibleName Checkbox & Radio
 */

const InputCheck = ({
  type, value, name, disabled, checked, onChange, label, className,
}: PropTypes) => {
  const classNames = cn(
    styles.inputCheck,
    className,
    { [styles.noLabel]: !label },
  );

  return (
    /* eslint-disable jsx-a11y/label-has-for */
    <div className={classNames}>
      <input
        type={type}
        id={value}
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={value}>
        {label && label}
        {checked && type === 'checkbox'
          ? <Icon name="check" className={styles.icon} size="18" />
          : null}
      </label>
    </div>
    /* eslint-enable jsx-a11y/label-has-for */
  );
};

type PropTypes = {
  type: 'radio' | 'checkbox',
  value: string,
  name: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: (Event) => void,
  label?: string,
  className?: string,
};

InputCheck.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
  label: '',
  className: '',
};

export default InputCheck;
