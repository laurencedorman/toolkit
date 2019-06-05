/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/index.scss';

const Wrapper = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Wrapper;
