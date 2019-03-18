/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
