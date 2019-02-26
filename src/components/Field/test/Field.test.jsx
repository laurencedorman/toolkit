import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';

describe('Field', () => {
  const wrapper = shallow(<Field component="test" />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
