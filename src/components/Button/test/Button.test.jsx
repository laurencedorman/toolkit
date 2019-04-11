/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  const wrapper = shallow(<Button />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a icon if props is true', () => {
    wrapper.setProps({ icon: true });
  });

  it('should render a children if props is true', () => {
    wrapper.setProps({ title: 'test' });
  });

  it('should render a different theme', () => {
    wrapper.setProps({ theme: 'primary' });
  });

  it('should render a different theme', () => {
    wrapper.setProps({ theme: 'secondary' });
  });
});
