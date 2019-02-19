// @flow
import React, { PureComponent } from 'react';

type propTypes = {
  /** (condition, errorMessage) => !condition ? errorMessage : true */
  validate: () => void | boolean,
  /** value => value && normalize value */
  normalize: () => void,
  /** Form Component name */
  formComponent: Node,
  data: Object | () => void,
}

class Field extends PureComponent<propTypes> {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      formattedValue: undefined,
      isValid: true,
      messageError: null,
    };
  }

  handleChange = e => this.setState({ value: e.currentTarget.value });

  handleValidation = (fn, props) => {
    const { value } = this.state;

    if (fn(value, props) === true) {
      this.setState({
        isValid: true,
        messageError: '',
      });
    }

    return false;
  };

  handleNormalize = (fn, props) => {
    const { value } = this.state;

    if (fn) {
      this.setState({ formattedValue: fn(value, props) });
    }
  };

  handleError = (fn, props) => {
    const { value } = this.state;

    if (value && fn(value, props) !== true) {
      this.setState({ messageError: fn() });
    }
  };

  handleComponent = Component => <Component />;

  render() {
    const {
      validate, normalize, formComponent, data, ...rest
    } = this.props;

    const {
      value, isValid, formattedValue, messageError,
    } = this.state;

    const getValue = formattedValue !== undefined ? formattedValue : value;

    return React.cloneElement(
      this.handleComponent(formComponent),
      {
        value: getValue,
        onChange: this.handleChange,
        validate: this.handleValidation(validate, data),
        normalize: this.handleNormalize(normalize, data),
        onBlur: () => this.handleError(validate, data),
        error: isValid,
        messageError,
        ...rest,
      },
    );
  }
}

export default Field;
