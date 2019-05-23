/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children, label }) => <div label={label}>{children}</div>;

Tab.displayName = 'Tab';

Tab.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node.isRequired,
  isDefaultActive: PropTypes.bool,
};

Tab.defaultProps = { isDefaultActive: false };

export default Tab;
