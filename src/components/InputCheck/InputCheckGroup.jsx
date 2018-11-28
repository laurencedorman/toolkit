// @flow
import React from 'react';
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
  groupName,
  selectedOption,
  disabled,
  onChange,
}: PropTypes) => (
  <div className={`${styles.CheckGroup} ${styles[direction]}`} direction={direction}>
    {inputGroupTitle
      && <span>{inputGroupTitle}</span>}

    {options.map(option => (
      <InputCheck
        type={type}
        key={option.value}
        name={groupName}
        label={option.label}
        value={option.value}
        checked={selectedOption.indexOf(option.value) > -1}
        disabled={disabled}
        onChange={onChange}
      />
    ))}
  </div>
);

type PropTypes = {
  inputGroupTitle?: string,
  direction?: 'horizontal' | 'vertical',
  options: Array<{label: string} | {value: string}>,
  type: 'radio' | 'checkbox',
  groupName: string,
  selectedOption?: string | Array<string>,
  disabled?: boolean,
  onChange?: (Event) => void,
};

InputCheckGroup.defaultProps = {
  inputGroupTitle: '',
  direction: 'horizontal',
  selectedOption: '',
  disabled: false,
  onChange: null,
};

export default InputCheckGroup;
