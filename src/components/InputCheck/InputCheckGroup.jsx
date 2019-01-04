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
  disabled,
  onChange,
  className,
}: PropTypes) => {
  const classNames = cn(
    styles.CheckGroup,
    styles[direction],
    className,
  );

  return (
    <div className={classNames} direction={direction}>
      {inputGroupTitle
      && <span>{inputGroupTitle}</span>}

      {options.map((option) => {
        const value = option.value ? option.value : option.label;
        return (
          <InputCheck
            type={type}
            key={value}
            name={name}
            label={option.label}
            value={value}
            checked={selectedOption.indexOf(value) > -1}
            disabled={disabled}
            onChange={onChange}
          />
        );
      })}
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
  onChange?: (Event) => void,
  className?: string,
};

InputCheckGroup.defaultProps = {
  inputGroupTitle: '',
  direction: 'horizontal',
  selectedOption: '',
  disabled: false,
  onChange: null,
  className: '',
};

export default InputCheckGroup;
