// @flow
import React from 'react';

type propTypes = {
  meta: Object,
  input: Object,
}

const WithReduxFormSelect = (WrappedComponent) => {
  const Component = ({
    meta,
    input: {
      value, name, onChange, onBlur, onFocus,
    },
    ...rest
  }:propTypes) => (
    <WrappedComponent
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      error={meta.touched && meta.error}
      messageError={meta.error}
      {...rest}
    />
  );

  return Component;
};

export default WithReduxFormSelect;
