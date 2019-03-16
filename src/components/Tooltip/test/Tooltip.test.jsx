import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  let wrapper;
  wrapper = shallow(
    <Tooltip content="test">
      test
    </Tooltip>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render content by function', () => {
    const mock = jest.fn();
    wrapper = shallow(
      <Tooltip content={mock}>
        test
      </Tooltip>,
    );
  });

  it('should display tooltip', () => {
    wrapper.setProps({ on: true });
  });
});
