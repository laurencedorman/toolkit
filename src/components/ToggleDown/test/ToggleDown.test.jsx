import React from 'react';
import { mount } from 'enzyme';
import ToggleDown from '../ToggleDown';

describe('ToggleDown', () => {
  const wrapper = mount(
    <ToggleDown on={false}>
      <div>children</div>
    </ToggleDown>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render an height transition if on is true', () => {
    wrapper.setProps({ on: true });
  });
});
