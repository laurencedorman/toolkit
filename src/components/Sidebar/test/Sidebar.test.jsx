import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from 'components';

describe('Sidebar', () => {
  const wrapper = shallow(
    <Sidebar><p>Sidebar test</p></Sidebar>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
