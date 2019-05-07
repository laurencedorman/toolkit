/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import GetMeasure from '../GetMeasure';

describe('GetMeasure', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GetMeasure>{({ size }) => size}</GetMeasure>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState', () => {
    const observer = jest.fn(() => 'test');
    wrapper.setState({ size: observer });
    expect(wrapper.state().size).toEqual(observer);
  });
});
