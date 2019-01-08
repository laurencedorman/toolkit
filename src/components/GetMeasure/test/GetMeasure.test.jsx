import React from 'react';
import { shallow } from 'enzyme';
import GetMeasure from '../GetMeasure';

describe('GetMeasure', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GetMeasure>
        {({ size }) => size}
      </GetMeasure>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should setState', () => {
    const observer = jest.fn(() => 'test');
    wrapper.setState({ size: observer });
  });
});
