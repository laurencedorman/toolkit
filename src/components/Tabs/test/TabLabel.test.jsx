/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TabLabel from '../TabLabel';

describe('TabLabel', () => {
  let wrapper;
  const renderMock = jest.fn();

  wrapper = shallow(
    <TabLabel onClick={renderMock} label="test" activeTab="test" />
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('span click invoke onClick props', () => {
    wrapper.find('span').simulate('click');
    expect(renderMock).toHaveBeenCalled();
  });

  it('should execute label if typeof is a function', () => {
    const label = () => 'test';

    wrapper = shallow(
      <TabLabel onClick={renderMock} label={label} activeTab="test" />
    );
  });
});
