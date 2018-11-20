import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  const wrapper = shallow(<Button />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a icon if props is true', () => {
    wrapper.setProps({ icon: true });
  });

  it('should render a children if props is true', () => {
    wrapper.setProps({ children: true });
  });
});
