import React from 'react';
import { shallow } from 'enzyme';
import Hint from '../Hint';

describe('Hint', () => {
  const wrapper = shallow(<Hint textAlert="test" />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
