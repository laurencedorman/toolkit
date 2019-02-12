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
      this.state = { getValue: {} };
    }

    /* eslint-disable */
    handleChange = (option) => {
      const {
        input: { onChange },
      } = this.props;

      onChange && option != null
        ? onChange(option)
        : onChange(null);

      this.setState({ getValue: option.value });
    };
    /* eslint-enable */

    render() {
      const {
        meta,
        input: { value, name, onBlur },
        ...rest
      } = this.props;

      const { getValue } = this.state;

      return (
        <WrappedComponent
          inputValue={getValue.value}
          value={value}
          name={name}
          onChange={this.handleChange}
          onBlur={() => onBlur(getValue.value)}
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
