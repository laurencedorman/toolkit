import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../Textarea';

describe('Textarea', () => {
  let wrapper;

  wrapper = shallow(
    <Textarea
      name="name"
      placeholder="placeholder"
    />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a Textarea', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
  });
});
