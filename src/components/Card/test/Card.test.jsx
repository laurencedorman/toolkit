import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  let wrapper;

  wrapper = shallow(<Card />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    wrapper = shallow(<Card><h1>children</h1></Card>);
    expect(wrapper.text()).toEqual('children');
  });
});
