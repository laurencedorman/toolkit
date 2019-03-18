/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Select from '../Select';

describe('Select', () => {
  let wrapper;
  const options = [{ value: 'jeanjean' }, { label: 'Jean Jean' }];

  beforeEach(() => {
    wrapper = shallow(
      <Select
        options={options}
        name="testName"
        placeholder="placeholder"
      />,
    );
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
