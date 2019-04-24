/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TabBody from "../TabBody";

describe('TabBody', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TabBody activeTab={undefined}>
        <div>test</div>
      </TabBody>
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
