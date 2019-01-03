import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

describe('Layout', () => {
  const wrapper = shallow(<Layout><h1>children</h1></Layout>);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    expect(wrapper.text()).toEqual('children');
  });
});
