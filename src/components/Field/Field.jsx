/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';


const Field = ({ validate, normalize, component: Component, ...props, }) => (
  React.Children.only(
    <Component
      valid={validate}
      normalize={normalize}
      error={!validate}
      {...props}
    />,
  )
);

Field.propTypes = {
  validate: PropTypes.bool,
  normalize: PropTypes.func,
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

Field.defaultProps = {
  validate: false,
  normalize: null,
};

export default Field;
