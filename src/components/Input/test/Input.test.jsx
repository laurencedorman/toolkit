import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'components';

describe('Input', () => {
  const wrapper = shallow(
    <Input
      type="text"
      id="id"
      name="name"
      label="label"
      helper="helper"
    />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render a label', () => {
    expect(wrapper.find('label').text()).toEqual('label');
  });

  it('should render specific className', () => {
    wrapper.setProps({ value: 'value' });
  });

  it('should render specific className', () => {
    wrapper.setProps({ reverse: true, icon: true });
  });

  it('should render an icon', () => {
    wrapper.setProps({ icon: true });
  });

  it('should render an indicator', () => {
    wrapper.setProps({ indicator: true });
  });

  it('should render an helper span', () => {
    wrapper.setProps({ helper: 'helper' });
  });

  it('should render an error span', () => {
    wrapper.setProps({ error: true });
  });
});
