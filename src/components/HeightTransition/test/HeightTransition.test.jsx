import React from 'react';
import { shallow } from 'enzyme';
import HeightTransition from '../HeightTransition';


describe('HeightTransition', () => {
  const wrapper = shallow(
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
