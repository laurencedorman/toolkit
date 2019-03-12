import React from 'react';
import { mount } from 'enzyme';
import TabLabel from '../TabLabel';


describe('TabLabel', () => {
  let wrapper;
  const renderMock = jest.fn();

  wrapper = mount(
    <TabLabel
      onClick={renderMock}
      label="test"
      activeTab="test"
    />,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('span click invoke onClick props', () => {
    wrapper.find('span').simulate('click');
    expect(renderMock).toHaveBeenCalled();
  });

  it('should execute label if typeof is a function', () => {
    const label = () => 'test';

    wrapper = mount(
      <TabLabel
        onClick={renderMock}
        label={label}
        activeTab="test"
      />,
    );
  });
});
