// @flow
import React from 'react';

type propTypes = {
  meta: Object,
  input: Object,
}

const WithReduxFormSelect = (WrappedComponent) => {
  class Component extends React.PureComponent<propTypes> {
    constructor(props) {
      super(props);
      this.state = { value: props.input.value };
    }

    handleChange = (selectedOption) => {
      const { input, value } = this.props;

      const getValue = selectedOption && value;
      this.setState({ value: getValue });

      input.onChange(value);
    };

    handleBlur = () => {
      const { input, value } = this.props;
      input.onBlur(value);
    };

    render() {
      const { meta, input, ...rest } = this.props;
      const { value } = this.state;

      return (
        <WrappedComponent
          {...input}
          value={value}
          name={input.name}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={input.onFocus}
          error={meta.touched && meta.error}
          messageError={meta.error}
          {...rest}
        />
      );
    }
  }

  return Component;
};

export default WithReduxFormSelect;
