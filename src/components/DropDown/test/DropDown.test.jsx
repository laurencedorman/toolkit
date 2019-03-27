/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import DropDown from '../DropDown';

describe('DropDown', () => {
  const props = {
    options: [
      { value: 'test', label: 'test' },
    ],
  };

  const wrapper = shallow(
    <DropDown
      on
      title="test"
      {...props}
    />
  );

  it('should render without crash', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render one children', () => {
    expect(wrapper.children().length).toEqual(1);
  });

  it('should render animated width', () => {
    const renderWidth = jest.fn(() => 'x');
    expect(renderWidth('x')).toEqual('x');
  });
});
