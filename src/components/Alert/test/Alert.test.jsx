import React from 'react';
import { mount } from 'enzyme';
import { animated } from 'react-spring';
import Alert, { translate } from '../Alert';


describe('Alert', () => {
  const toggle = jest.fn();
  const TestAnimated = animated;

  const wrapper = mount(
    <Alert on={false} toggle={toggle} textAlert="test" theme="danger" />,
  );


  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render alert if props on is true', () => {
    wrapper.setProps({ on: true });
  });

  it('should render timeout close function if props timeout is declared', () => {
    wrapper.setProps({ timeout: 300 });
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

  it('instantiates', () => {
    expect(TestAnimated).toBeTruthy();
  });

  test('translate', () => {
    expect(translate('default')).toBe(320);
  });
});
