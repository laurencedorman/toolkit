// @flow
import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
const DropDown = ({
  options,
  onChange,
  onInputChange,
  onBlur,
  onFocus,
  name,
  placeholder,
  defaultValue,
  value,
  onCreateOption,
}:propTypes) => (
  <div className={styles.container}>
    <CreatableSelect
      styles={customStyles}
      name={name}
      inputValue={value}
      onChange={onChange}
      onInputChange={onInputChange}
      onCreateOption={onCreateOption}
      onBlur={onBlur}
      onFocus={onFocus}
      options={options}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  </div>
);

export const customStyles = {
  option: (style, state) => ({
    ...style,
    backgroundColor: state.isSelected && colors.squidInk,
    cursor: 'pointer',
    '&:hover': { backgroundColor: colors.greyMed },
  }),
  container: style => ({
    ...style,
    position: 'relative',
    width: 'auto',
  }),
  control: style => ({
    ...style,
    backgroundColor: colors.balataGreen,
    boxShadow: 'none',
    borderRadius: 3,
    borderColor: colors.greyDark,
    '&:hover': {
      backgroundColor: colors.articCitric,
      borderColor: 'transparent',
    },
  }),
  input: style => ({
    ...style,
    padding: 0,
    color: colors.white,
  }),
  valueContainer: style => ({
    ...style,
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    minHeight: 64,
    padding: '8px 16px',
  }),
  singleValue: style => ({
    ...style,
    color: colors.white,
  }),
  placeholder: style => ({
    ...style,
    color: colors.white,
  }),
  dropdownIndicator: style => ({
    ...style,
    color: colors.white,
    cursor: 'pointer',
    '&:hover': { color: colors.blueMood },
  }),
  indicatorSeparator: () => ({}),
};

type propTypes = {
  options: Array<{label: string} | {value: string}>,
  value?: string,
  onChange?: () => void,
  onInputChange?: () => void,
  onCreateOption?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  theme?: string,
  placeholder?: string,
  defaultValue?: string,
  customStyles: () => void,
};

DropDown.defaultProps = {
  value: '',
  onChange: null,
  onInputChange: null,
  onCreateOption: null,
  onFocus: null,
  onBlur: null,
  theme: 'default',
  placeholder: '',
  defaultValue: '',
};


export default DropDown;
