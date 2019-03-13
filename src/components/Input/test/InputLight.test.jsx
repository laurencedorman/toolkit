import React from 'react';
import { shallow } from 'enzyme';
import InputLight from '../InputLight';

describe('InputLight', () => {
  const wrapper = shallow(
    <InputLight
      type="text"
      id="id"
      name="name"
    />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
