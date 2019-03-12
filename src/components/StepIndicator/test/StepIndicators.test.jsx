import React from 'react';
import { mount } from 'enzyme';
import StepIndicator from '../StepIndicator';

describe('StepIndicator', () => {
  const wrapper = mount(
    <StepIndicator activeStep={1}>
      <div step="1" label="One" />
      <div step="2" label="Two" />
      <div step="3" label="Three" />
    </StepIndicator>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
