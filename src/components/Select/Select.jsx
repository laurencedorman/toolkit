// @flow
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
import styles from './Select.module.scss';

/**
 * @visibleName Select
 */
type propTypes = {
  label?: PropTypes.string,
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

export class Select extends Component<propTypes> {
  static defaultProps = {
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

  render() {
    const { options, placeholder, onChange, onBlur, onFocus, helper, error, label, isMulti, defaultValue } = this.props;

    const select = cn(styles.select, {
      [styles.hasError]: error,
    });

    const customStyles = {
      option: (style, state) => ({
        ...style,
        backgroundColor: state.isSelected && '#0c193a',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#e8e8e8',
        }
      }),
      control: (style) => ({
        ...style,
        borderRadius: 3,
        boxShadow: 'none',
        borderColor: '#e8e8e8',
        '&:hover': {
          borderColor: '#e8e8e8',
        },
      }),
      input: () => ({
        padding: 0,
        borderWidth: 1,
        boxSizing: 'border-box',
      }),
      valueContainer: () => ({
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: 'calc(100% - 115px)',
        minHeight: 46,
        padding: '8px 16px',
      }),
      indicatorSeparator: (style) => (console.log(style),{
        ...style,
      }),
      multiValueRemove: (style) => ({
        ...style,
        '&:hover': {
          backgroundColor: '#0c193a',
          color: '#fff',
          cursor: 'pointer',
        }
      })
    };

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {label && <label>{label}</label>}
          <ReactSelect
            className={select}
            styles={customStyles}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            defaultValue={defaultValue}
            options={options}
            isMulti={isMulti}
            matchPos="start"
            placeholder={placeholder}
          />
        </div>
        {helper && <span className={styles.helper}>{helper}</span>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default Select;
