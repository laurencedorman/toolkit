/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Select.module.scss';

const Select = ({
  className,
  options,
  placeholder,
  helper,
  error,
  label,
  disabled,
  required,
  themeLight,
  value,
  dataQa,
  ...selectProps
}) => {
  const classNames = cn(
    styles.select,
    styles[className],
    {
      [styles.noOptionSelected]: !value && placeholder,
      [styles.light]: themeLight,
      [styles.hasError]: error,
      [styles.disabled]: disabled,
    },
  );

  return (
    <div className={classNames} data-qa={dataQa}>
      <label>
        {label &&
          <span className={styles.label}>
            {label}{required && <sup>*</sup>}
          </span>
        }
        <span className={styles.mask}>
          <select
            {...selectProps}
            aria-required={required}
            className={styles.control}
            disabled={disabled}
            required={required}
            defaultValue={value}
          >
            {placeholder &&
              <option
                disabled
                value=""
              >
                {placeholder}
              </option>
            }
            {options.map((option, index) => (
              <option
                value={option.value}
                key={`${index}-${option.value}`}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <span className={styles.arrow} />
        </span>
      </label>
      {helper && <span className={cn(styles.message, styles.helperMessage)}>{helper}</span>}
      {error && <span className={cn(styles.message, styles.errorMessage)}>{error}</span>}
    </div>
  )
};


Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options:  PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
  })).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  themeLight: PropTypes.bool,
  value: PropTypes.string.isRequired,
  dataQa: PropTypes.string,
};

Select.defaultProps = {
  className: undefined,
  disabled: false,
  error: '',
  helper: '',
  label: '',
  placeholder: '',
  required: false,
  themeLight: false,
  dataQa: undefined,
};

export default Select;
