/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import ToggleDown from '../ToggleDown';

describe('ToggleDown', () => {
  const wrapper = shallow(
    <ToggleDown on={false}>
      <div>children</div>
    </ToggleDown>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render an height transition if on is true', () => {
    wrapper.setProps({ on: true });
  });
});
