/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../index.scss';

type propTypes = { children: Node }

export default class Wrapper extends PureComponent<propTypes> {
  render() {
    const { children } = this.props;

    return (
      <Router>{children}</Router>
    );
  }
}
