/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';


const Field = ({ valid, normalize, error, component: Component, ...props, }) => (
  React.Children.only(
    <Component
      error={error}
      normalize={normalize}
      valid={valid}
      {...props}
    />,
  )
);

Field.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  error: PropTypes.string,
  normalize: PropTypes.func,
  valid: PropTypes.bool,
};

Field.defaultProps = {
  normalize: null,
  valid: false,
};

export default Field;
