import React from 'react';
import { shallow } from 'enzyme';
import { Overlay } from 'components';

describe('Overlay', () => {
  const wrapper = shallow(
    <Overlay on />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
