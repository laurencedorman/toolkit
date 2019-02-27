// @flow
import React from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';

import colors from '../../styles/colors';
import styles from './Select.module.scss';

/**
 * @visibleName Select
 */
const Select = ({
  options,
  placeholder,
  value,
  inputValue,
  onChange,
  onBlur,
  onFocus,
  helper,
  error,
  label,
  isMulti,
  defaultValue,
  name,
  disabled,
  required,
  theme,
  dataQa,
  ...props
}:propTypes) => {
  const select = cn(
    styles.select,
    styles[theme],
    {
      [styles.hasError]: error,
      [styles.disabled]: disabled,
    },
  );

  const labelStyle = cn({
    [styles.required]: required,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          /* eslint-disable */
          label && <label className={labelStyle}>{label}</label>
          /* eslint-enable */
        }
        <ReactSelect
          {...props}
          className={select}
          styles={customStyles}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          defaultValue={defaultValue}
          options={options}
          inputValue={inputValue}
          value={value}
          isMulti={isMulti}
          matchPos="start"
          placeholder={placeholder}
          isDisabled={disabled}
          theme={theme}
          data-qa={dataQa}
        />
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

const customStyles = {
  option: (style, state) => ({
    ...style,
    backgroundColor: state.isSelected && '#0c193a',
    borderColor: colors.greyDark,
    cursor: 'pointer',
    zIndex: 9999,
    '&:hover': {
      backgroundColor: '#e8e8e8',
    },
  }),
  control: (style, state) => ({
    ...style,
    borderRadius: 3,
    boxShadow: 'none',
    maxHeight: state.selectProps.theme === 'light' ? 36 : 56,
    minHeight: state.selectProps.theme === 'light' ? 36 : 56,
    borderColor:
      state.selectProps.className.includes('hasError')
        ? colors.cocoCorail
        : colors.greyDark,
    '&:hover': {
      borderColor:
        state.selectProps.className.includes('hasError')
          ? colors.cocoCorail
          : colors.greyDark,
    },
  }),
  input: () => ({
    padding: 0,
    borderWidth: 1,
    boxSizing: 'border-box',
  }),
  valueContainer: (style, state) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 'calc(100% - 115px)',
    minHeight: state.selectProps.theme === 'light' ? 36 : 56,
    padding: state.selectProps.theme === 'light' ? '8px' : '8px 16px',
  }),
  indicatorSeparator: style => ({
    ...style,
    alignSelf: 'center',
  }),
  multiValueRemove: style => ({
    ...style,
    '&:hover': {
      backgroundColor: '#0c193a',
      color: '#fff',
      cursor: 'pointer',
    },
  }),
};

type propTypes = {
  disabled?: boolean,
  required?: boolean,
  label?: string,
  placeholder?: string,
  defaultValue?: string,
  options: Array<{label: string} | {value: string}>,
  helper?: string,
  error?: string,
  isMulti?: boolean,
  onChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  theme?: 'light' | null,
  dataQa?: string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  label: '',
  placeholder: '',
  defaultValue: '',
  helper: '',
  error: '',
  isMulti: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
  theme: null,
  dataQa: '',
};


export default Select;
