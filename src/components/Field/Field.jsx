import React from 'react';
import PropTypes from 'prop-types';


const Field = ({ validate, normalize, component: Component, ...props, }) =>
  React.Children.only(
    <Component
      valid={validate}
      normalize={normalize}
      error={!validate}
      {...props}
    />,
  );

Field.propTypes = {
  validate: PropTypes.bool,
  normalize: PropTypes.shape({}),
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

Field.defaultProps = {
  validate: false,
  normalize: {},
};

export default Field;
