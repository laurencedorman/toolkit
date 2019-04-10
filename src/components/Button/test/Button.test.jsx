/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import Icon from '../../Icon';
import IconEdit from '../../Icon/Icons/IconEdit';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render a icon if props is true', () => {
    //given
    wrapper = shallow(<Button iconComponent={IconEdit} />);
    // then
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should render a title', () => {
    //given
    wrapper = shallow(<Button title="titleTest" />);
    // then
    expect(wrapper.text()).toEqual('titleTest');
  });

  it('should render children', () => {
    //given
    wrapper = shallow(<Button>children</Button>);
    // then
    expect(wrapper.text()).toEqual('children');
  });
});
