/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('Icon', () => {
  let wrapper;

  wrapper = shallow(<Icon name="document" />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render different role', () => {
    const click = jest.fn();
    wrapper.setProps({ onClick: click });
  });

  it('should render different svg with special name', () => {
    wrapper = shallow(<Icon name="chevron-up" />);
  });
});
