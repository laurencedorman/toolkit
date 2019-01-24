import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('Loader', () => {
  const wrapper = shallow(<Loader name="loader" />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
