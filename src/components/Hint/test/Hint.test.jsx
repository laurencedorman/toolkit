import React from 'react';
import { shallow } from 'enzyme';
import Hint from '../Hint';

describe('Hint', () => {
  let wrapper;

  wrapper = shallow(<Hint />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render witha default theme', () => {
    expect(wrapper.props(theme)).toEqual('default');
  });
});
