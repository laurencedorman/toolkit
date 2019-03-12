import React from 'react';
import { mount } from 'enzyme';
import HeightTransition from '../HeightTransition';


describe('HeightTransition', () => {
  const wrapper = mount(
    <HeightTransition>
      <div>test</div>
    </HeightTransition>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render animation height if props is on', () => {
    wrapper.setProps({ on: true });
  });
});
