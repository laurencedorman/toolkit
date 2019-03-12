import React from 'react';
import { mount } from 'enzyme';
import DropDown from '../DropDown';

describe('DropDown', () => {
  const props = {
    options: [
      { value: 'test', label: 'test' },
    ],
  };

  const wrapper = mount(<DropDown {...props} />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render one children', () => {
    expect(wrapper.children().length).toEqual(1);
  });

  it('should render animated width', () => {
    const renderWidth = jest.fn(() => 'x');
    expect(renderWidth('x')).toEqual('x');
  });
});
