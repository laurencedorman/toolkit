import React from 'react';
import { shallow } from 'enzyme';
import InputCheck from '../InputCheck';

describe('InputCheck', () => {
  let wrapper;

  wrapper = shallow(
    <InputCheck
      type="radio"
      value="test"
      name="name"
      label="label"
    />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render a label', () => {
    expect(wrapper.text()).toEqual('label');
  });

  it('should be checked at true', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').prop('checked')).toEqual(true);
  });
});

