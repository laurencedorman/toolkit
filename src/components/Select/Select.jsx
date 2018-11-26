// @flow
import React from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
import styles from './Select.module.scss';

/**
 * @visibleName Select
 */
const Select = ({
  options,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  helper,
  error,
  label,
  isMulti,
  defaultValue,
  name,
  ...props
}:propTypes) => {
  const select = cn(styles.select, {
    [styles.hasError]: error,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          /* eslint-disable */
          label && <label>{label}</label>
          /* eslint-disable */
        }
        <ReactSelect
          {...props}
          className={select}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          defaultValue={defaultValue}
          options={options}
          inputValue={value}
          isMulti={isMulti}
          matchPos="start"
          placeholder={placeholder}
        />
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};



type propTypes = {
  label?: string,
  placeholder?: string,
  defaultValue?: string,
  options: Array<{label: string} | {value: string}>,
  helper?: string,
  error?: boolean,
  isMulti?: boolean,
  onChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
};

Select.defaultProps = {
  label: '',
  placeholder: '',
  defaultValue: '',
  helper: '',
  error: false,
  isMulti: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
};


export default Select;
