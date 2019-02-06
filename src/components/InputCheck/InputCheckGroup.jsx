// @flow
import React from 'react';
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
}: PropTypes) => {
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

type PropTypes = {
  inputGroupTitle?: string,
  direction?: 'horizontal' | 'vertical',
  options: Array<{label: string} | {value: string}>,
  type: 'radio' | 'checkbox',
  name: string,
  selectedOption?: string | Array<string>,
  disabled?: boolean,
  required?: boolean,
  onChange?: (Event) => void,
  className?: string,
  error?: boolean,
  messageError?: string,
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
