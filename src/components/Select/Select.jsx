// @flow
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
import 'react-select/dist/react-select.css';
import styles from './Select.module.scss';

/**
 * @visibleName Select
 */
export class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    input: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
    value: PropTypes.string,
    globalFormError: PropTypes.bool,
    meta: PropTypes.shape({
      error: PropTypes.string,
    }),
    hidden: PropTypes.bool,
    label: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    placeholder: '',
    value: '',
    globalFormError: false,
    meta: {},
    hidden: false,
    label: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (Object.prototype.hasOwnProperty.call(nextProps.input, 'value')
      && nextProps.input.value !== prevState.value) {
      return { value: nextProps.input.value };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.input.value,
    };
  }

  handleChange = (selectedOption) => {
    const value = selectedOption && selectedOption.value;
    this.setState({ value });
    this.props.input.onChange(this.props.value);
  };

  handleBlur = () => {
    this.props.input.onBlur(this.state.value);
  };

  render() {
    const { value } = this.state;
    const { options, placeholder, input, helper, error, label, } = this.props;

    const isRequired = cn({
      [styles.required]: required
    });

    const contentClass = cn(styles.content, {
      [styles.hasValue]: value,
      [styles.hasSuccess]: value && valid,
    });

    const hasError = cn({
      [styles.hasError]: error,
    });

    return (
      <div className={styles.container}>
        <div className={contentClass}>
          <ReactSelect
            className={hasError}
            value={value}
            name={input.name}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            options={options}
            matchPos="start"
            placeholder={placeholder}
          />
          <label htmlFor={id} className={isRequired}>{label}</label>
        </div>
        {helper && <span className={styles.helper}>{helper}</span>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default Select;
