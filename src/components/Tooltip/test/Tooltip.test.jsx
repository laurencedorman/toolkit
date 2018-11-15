import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  const wrapper = shallow(
    <Tooltip content="She starred in one of the ones that became nothing.">
      source tooltip
    </Tooltip>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
