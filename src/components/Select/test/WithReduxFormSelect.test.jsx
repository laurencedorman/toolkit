/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import WithReduxFormSelect from '../WithReduxFormSelect';

describe('Card', () => {
  const props = {
    meta: {
      error: false,
      touched: false,
    },
    input: {
      value: 'test',
    },
  };

  const wrapper = shallow(<WithReduxFormSelect {...props} />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render error', () => {
    wrapper.setProps({ meta: { error: true, touched: true } });
  });
});
