import React from 'react';
import { shallow } from 'enzyme';
import Iframe from '../Iframe';

describe('Iframe', () => {
  const wrapper = shallow(
    <Iframe
      id="test"
      src="test"
      title="test"
    />
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
