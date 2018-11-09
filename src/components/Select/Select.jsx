// @flow
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
//import 'react-select/dist/react-select.css';
import styles from './Select.module.scss';

/**
 * @visibleName Select
 */
type propTypes = {
  label?: PropTypes.string,
  placeholder?: string,
  options: Array<{label: string} | {value: string}>,
  value?: string,
  helper?: string,
  error?: boolean,
  hidden?: PropTypes.bool,
  onChange?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
};

export class Select extends Component<propTypes> {
  static defaultProps = {
    className: '',
    placeholder: '',
    value: '',
    hidden: false,
    label: '',
    onChange: null,
    onFocus: null,
    onBlur: null,
  };

  render() {
    const { options, placeholder, onChange, onBlur, helper, error, label, value } = this.props;

    const contentClass = cn(styles.content, {
      [styles.hasValue]: value,
      [styles.hasSuccess]: value && valid,
    });

    const select = cn(styles.select, {
      [styles.hasError]: error,
    });

    return (
      <div className={styles.container}>
        <div className={contentClass}>
          <ReactSelect
            className={select}
            //value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            options={options}
            matchPos="start"
            placeholder={placeholder}
          />
          <label>{label}</label>
        </div>
        {helper && <span className={styles.helper}>{helper}</span>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default Select;
