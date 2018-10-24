import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('Logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have special class for theme if props is define', () => {
    wrapper.setProps({ theme: 'colorWhite' });
    expect(wrapper.hasClass('colorWhite')).toEqual(true);
  });
});
