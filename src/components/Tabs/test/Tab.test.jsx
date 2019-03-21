/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('Tab', () => {
  const onClick = jest.fn();
  const wrapper = shallow(
    <Tab label="label" activeTab="label" onClick={onClick}>
      tab
    </Tab>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
