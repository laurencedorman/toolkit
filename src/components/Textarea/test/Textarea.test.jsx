/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../Textarea';

describe('Textarea', () => {
  const wrapper = shallow(
    <Textarea
      name="name"
      placeholder="placeholder"
    />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a Textarea', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
  });
});
