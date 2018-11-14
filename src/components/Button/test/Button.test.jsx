import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  const wrapper = shallow(<Button />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
