// @flow
import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { components } from 'react-select';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
const Placeholder = props => <components.Placeholder {...props} />;

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
  children,
  ...props
}:propTypes) => (
  <div className={styles.container}>
    <CreatableSelect
      {...props}
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
      component={{ Placeholder }}
      placeholder={placeholder}
    >
      {children && children}
    </CreatableSelect>
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
    borderColor: 'transparent',
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
    minHeight: 54,
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
  placeholder?: string | Node,
  defaultValue?: string,
  customStyles: () => void,
  children?: Node,
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
  children: null,
};

export default DropDown;
