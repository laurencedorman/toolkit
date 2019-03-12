import React from 'react';
import { shallow } from 'enzyme';
import Step from '../Step';

describe('Step', () => {
  const wrapper = shallow(<Step />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render special className icon if props done or active', () => {
    wrapper.setProps({ done: true });
    wrapper.setProps({ active: true });
  });
});
