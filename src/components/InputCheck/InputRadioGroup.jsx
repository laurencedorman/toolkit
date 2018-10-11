import React from 'react';
import InputCheck from './index';
import styles from './InputCheck.module.scss';


const InputRadioGroup = ({
  direction, options, groupName, label, value, selectedOption, disabled, onChange }: PropTypes) => (

  <div direction={direction} className={`${styles.manoolkitRadioGroup} ${styles[direction]}`}>
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
  direction?: Array<'horizontal', 'vertical'>,
  options: Array,
  value: string,
  groupName: string,
  selectedOption?: string,
  disabled?: boolean,
  onChange?: () => {},
  label: string,
};

InputRadioGroup.defaultProps = {
  direction: 'horizontal',
  selectedOption: '',
  disabled: false,
  onChange: null,
};

export default InputRadioGroup;
