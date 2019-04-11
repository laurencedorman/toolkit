/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';
import Input from '../../Input';

describe('Field', () => {
  const wrapper = shallow(
    <Field
      component={Input}
      label="test"
      type="text"
      id="test"
      name="test"
      value="value"
    />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
