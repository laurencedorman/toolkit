// @flow
import React from 'react';

type propTypes = {
  meta: Object,
  input: Object,
}

const WithReduxFormSelect = (WrappedComponent) => {
  class Component extends React.PureComponent<propTypes> {
    handleChange = (selectedOption) => {
      const { input: { onChange } } = this.props;
      onChange(selectedOption);
    };

    render() {
      const {
        meta,
        input: { value, name },
        ...rest
      } = this.props;

      return (
        <WrappedComponent
          value={value}
          name={name}
          onChange={this.handleChange}
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
