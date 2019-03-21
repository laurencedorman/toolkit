/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import InputCheck from './InputCheck';
import styles from './InputCheck.module.scss';

/**
 * @visibleName CheckBox & Radio Group
 */
const InputCheckGroup = ({
  inputGroupTitle,
  direction,
  options,
  type,
  name,
  selectedOption,
  required,
  disabled,
  onChange,
  className,
  error,
  messageError,
}) => {
  const classNames = cn(
    styles.CheckGroup,
    styles[direction],
    className,
  );

  const labelStyle = cn({
    [styles.required]: required,
  });

  return (
    <div className={classNames}>
      {inputGroupTitle && <span className={labelStyle}>{inputGroupTitle}</span>}
      {options && options.map((option) => {
        const value = option.value ? option.value : option.label;
        return React.cloneElement(
          <InputCheck
            type={type}
            key={value}
            name={name}
            label={option.label}
            value={value}
            checked={type === 'radio' ? selectedOption === value : selectedOption.indexOf(value) > -1}
            disabled={disabled}
            onChange={onChange}
          />,
        );
      })}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
  );
};

InputCheckGroup.propTypes = {
  inputGroupTitle: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  name: PropTypes.string.isRequired,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.bool,
  messageError: PropTypes.string,
};

InputCheckGroup.defaultProps = {
  inputGroupTitle: '',
  direction: 'horizontal',
  selectedOption: '',
  disabled: false,
  required: false,
  onChange: null,
  className: '',
  error: false,
  messageError: '',
};

export default InputCheckGroup;
