import React from 'react';
import { mount } from 'enzyme';
import { Tooltip } from 'components';

describe('Tooltip', () => {
  let wrapper;
  wrapper = mount(
    <Tooltip content="test">
      test
    </Tooltip>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render content by function', () => {
    const mock = jest.fn();
    wrapper = mount(
      <Tooltip content={mock}>
        test
      </Tooltip>,
    );
  });

  it('should display tooltip', () => {
    wrapper.setProps({ on: true });
  });
});
