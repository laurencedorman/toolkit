import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  let wrapper;

  wrapper = shallow(<Wrapper />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    wrapper = shallow(<Wrapper><Router /></Wrapper>);
    expect(wrapper.find(Router).length).toEqual(2);
  });
});
