import React from 'react';
import { shallow } from 'enzyme';
import Tags from '../Tags';

describe('Tags', () => {
  let wrapper;

  wrapper = shallow(<Tags>Tag</Tags>);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    expect(wrapper.text()).toEqual('Tag');
  });

  it('should have className disabled if props is true', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass('disabled')).toEqual(true);
  });
});
