import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('Icon', () => {
  let wrapper;

  wrapper = shallow(<Icon name="document" />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
