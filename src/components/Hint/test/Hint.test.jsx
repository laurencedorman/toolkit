import React from 'react';
import { shallow } from 'enzyme';
import { Hint } from 'components';

describe('Hint', () => {
  const wrapper = shallow(<Hint />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
