import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';

describe('Avatar', () => {
  const wrapper = shallow(<Avatar />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});