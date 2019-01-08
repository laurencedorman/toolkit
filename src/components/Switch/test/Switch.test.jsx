import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Switch';

describe('Switch', () => {
  const wrapper = shallow(
    <Switch
      id="test"
      name="name"
    />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render different margin with props reset', () => {
    wrapper.setProps({ reset: true });
  });

  it('should render label', () => {
    wrapper.setProps({ label: true });
  });
});
