// @flow
import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
const DropDown = ({
  options, onChange, onInputChange, onBlur, onFocus, name, placeholder,
}:propTypes) => {
  const customStyles = {
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
      borderRadius: 3,
      boxShadow: 'none',
      borderColor: colors.greyDark,
      backgroundColor: colors.greyMed,
      '&:hover': { borderColor: 'transparent' },
    }),
    input: style => ({
      ...style,
      padding: 0,
      color: colors.squidInk,
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
      color: colors.squidInk,
    }),
    placeholder: style => ({
      ...style,
      color: colors.squidInk,
    }),
    dropdownIndicator: style => ({
      ...style,
      color: colors.squidInk,
      cursor: 'pointer',
      '&:hover': { color: '#0397a7' },
    }),
    indicatorSeparator: () => ({}),
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CreatableSelect
          styles={customStyles}
          name={name}
          onChange={onChange}
          onInputChange={onInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
          options={options}
          placeholder={placeholder}
          isClearable
        />
      </div>
    </div>
  );
};

type propTypes = {
  options: Array<{label: string} | {value: string}>,
  onChange?: () => void,
  onInputChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  theme?: string,
  placeholder?: string,
};

DropDown.defaultProps = {
  onChange: null,
  onInputChange: null,
  onFocus: null,
  onBlur: null,
  theme: 'default',
  placeholder: '',
};


export default DropDown;
