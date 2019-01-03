import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../Tabs';

describe('Tabs', () => {
  const wrapper = shallow(<Tabs />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
