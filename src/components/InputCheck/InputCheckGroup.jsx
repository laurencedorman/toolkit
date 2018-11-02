// @flow
import React from 'react';
import InputCheck from './index';
import styles from './InputCheck.module.scss';

/**
 * @visibleName CheckBox & Radio Group
 */
const InputCheckGroup = ({
  inputGroupTitle, direction, options, type, groupName, selectedOption, disabled, onChange }: PropTypes) => (

  <div className={`${styles.CheckGroup} ${styles[direction]}`} direction={direction} >
    {inputGroupTitle && <span>{inputGroupTitle}</span>}
    {options.map((option, id) => (
      <InputCheck
        type={type}
        key={id}
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
  options: Array,
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
