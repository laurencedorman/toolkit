/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
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
  label,
  className,
  itemId,
  dataQa,
}) => {
  const classNames = cn(
    styles.inputCheck,
    { [styles.noLabel]: !label, [styles.required]: required },
    className
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
        required={required}
        disabled={disabled}
        onChange={onChange}
        data-itemid={itemId}
        data-qa={dataQa}
        aria-describedby={label}
      />
      <label htmlFor={value}>
        {label && label}
        {checked && type === 'checkbox' ? (
          <Icon name="check" className={styles.icon} size="18" />
        ) : null}
      </label>
    </div>
    /* eslint-enable jsx-a11y/label-has-for */
  );
};

InputCheck.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  dataQa: PropTypes.string,
  itemId: PropTypes.string,
};

InputCheck.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
  onChange: null,
  label: '',
  className: '',
  dataQa: '',
  itemId: '',
};

export default InputCheck;
