/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
  const wrapper = shallow(
    <Modal on><p>Modal test</p></Modal>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render modal if props is on', () => {
    wrapper.setProps({ on: true });
  });
});
