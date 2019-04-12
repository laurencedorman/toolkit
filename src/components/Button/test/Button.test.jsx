/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import IconEdit from '../../Icon/Icons/IconEdit';
import Icon from '../../Icon';

describe('Button', () => {
  const wrapper = shallow(<Button />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a icon if props is true', () => {
    // Given
    const wrapper = shallow(<Button iconComponent={IconEdit} />);
    // Then
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should render a title', () => {
    // Given
    const wrapper = shallow(<Button title="titleTest" />);
    // Then
    expect(wrapper.text()).toEqual('titleTest');
  });

  it('should render children', () => {
    // Given
    const wrapper = shallow(<Button>children</Button>);
    // Then
    expect(wrapper.text()).toEqual('children');
  });
});
