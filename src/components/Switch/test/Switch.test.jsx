import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Switch';

describe('Switch', () => {
  let wrapper;

  wrapper = shallow(
    <Switch
      id="test"
      name="name"
    />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should be checked at true and label has class active', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').prop('checked')).toEqual(true);
    expect(wrapper.find('label').hasClass('active')).toEqual(true);
  });
});
