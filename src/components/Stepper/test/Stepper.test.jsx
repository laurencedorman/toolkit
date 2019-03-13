import React from 'react';
import { mount } from 'enzyme';
import Stepper from '../Stepper';

describe('Stepper', () => {
  const wrapper = mount(
    <Stepper direction="up">
      <div step="1" label="One">
        <h4>step 1 container</h4>
        <p>This is step One container</p>
      </div>

      <div step="2" label="Two">
        <h4>step 2 container</h4>
        <p>This is step Two container</p>
      </div>
    </Stepper>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a step', () => {
    const toggle = jest.fn();
    wrapper.setProps({ on: true, toggle });
  });

  it('should control step', () => {
    const action = jest.fn();
    // const prevStep = jest.fn();
    // const nextStep = jest.fn();
    wrapper.setProps({
      prevState: action,
      nextStep: action,
      activeStep: 1,
      setTotalStep: action,
      direction: 'down',
      lastStep: action,
      totalStep: 4,
    });
    // wrapper.simulate('click');
  });
});