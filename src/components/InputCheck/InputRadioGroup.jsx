import React from 'react';
import InputCheck from './index';
import styles from './InputCheck.module.scss';


const InputRadioGroup = ({
  radioGroupTitle, direction, options, groupName, selectedOption, disabled, onChange }: PropTypes) => (

  <div direction={direction} className={`${styles.manoolkitRadioGroup} ${styles[direction]}`}>
    {radioGroupTitle && <span>{radioGroupTitle}</span>}
    {options.map((option, id) => (
      <InputCheck
        type="radio"
        key={id}
        name={groupName}
        label={option.label}
        id={option.value}
        checked={option.value === selectedOption}
        disabled={disabled}
        onChange={onChange}
      />
    ))}
  </div>
);

type PropTypes = {
  radioGroupTitle?: string,
  direction?: Array<'horizontal', 'vertical'>,
  options: Array,
  groupName: string,
  selectedOption?: string,
  disabled?: boolean,
  onChange?: () => {},
};

InputRadioGroup.defaultProps = {
  radioGroupTitle: '',
  direction: 'horizontal',
  selectedOption: '',
  disabled: false,
  onChange: null,
};

export default InputRadioGroup;
