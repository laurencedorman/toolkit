import React from 'react';
import { shallow } from 'enzyme';
import Image from '../Image';

describe('Image', () => {
  const wrapper = shallow(
    <Image src="france" alt="france" />,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render different role', () => {
    wrapper.setProps({ onClick: 'test' });
  });
});
