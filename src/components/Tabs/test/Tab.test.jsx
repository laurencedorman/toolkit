import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('Tab', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Tab label="label" activeTab="label" onClick={onClick} />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
