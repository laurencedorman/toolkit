import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';

describe('Alert', () => {
  const wrapper = shallow(<Alert />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render alert if props on is true', () => {
    wrapper.setProps({ on: true });
  });

  it('should set position on bottom right if position is changed', () => {
    wrapper.setProps({ position: 'bottomRight' });
  });

  it('should set position on top left if position is changed', () => {
    wrapper.setProps({ position: 'topLeft' });
  });

  it('should set position on bottom left if position is changed', () => {
    wrapper.setProps({ position: 'bottomLeft' });
  });
});
