/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import OptionContainer from '../OptionContainer';

describe('OptionContainer', () => {
  const onClick = jest.fn();
  const toggle = jest.fn();

  const props = {
    onClick,
    toggle,
    size: {
      height: 40,
      width: 40,
    },
    options: [{
      label: 'test',
      value: 'test',
    }],
  };

  const wrapper = shallow(
    <OptionContainer {...props} on />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render an overlay if on', () => {
    wrapper.setProps({ on: true });
  });

  it('should have onClick action', () => {
    wrapper.find('li').simulate('click');
    wrapper.find('li').simulate('keyPress');
    expect(onClick).toHaveBeenCalled();
  });

  it('should have onClick action', () => {
    wrapper.find('span').simulate('click');
    wrapper.find('span').simulate('keyPress');
    expect(toggle).toHaveBeenCalled();
  });
});
