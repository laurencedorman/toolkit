/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';


const Field = ({ validate, normalize, error, component: Component, ...props, }) => (
  React.Children.only(
    <Component
      valid={validate}
      normalize={normalize}
      error={error}
      {...props}
    />,
  )
);

Field.propTypes = {
  validate: PropTypes.func,
  normalize: PropTypes.func,
  error: PropTypes.string,
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

Field.defaultProps = {
  validate: () => {},
  normalize: null,
};

export default Field;
