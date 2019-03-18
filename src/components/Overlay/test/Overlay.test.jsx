/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Overlay from '../Overlay';

describe('Overlay', () => {
  const props = {
    zIndex: 8000,
    backgroundColor: '#000',
  };

  const wrapper = mount(
    <Overlay on {...props} />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
