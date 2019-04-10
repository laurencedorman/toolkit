/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';
import DropDown from '../DropDown';
import Icon from '../../Icon';

describe('DropDown', () => {
  let wrapper;

  const props = {
    options: [
      { value: 'valueTest', label: 'labelTest' },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(
      <DropDown
        on
        title="titleTest"
        dataQa="testQa"
        {...props}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  });

  it('should render one children', () => {
    expect(wrapper.children().length).toEqual(1);
  });

  it('should call toggle method when button has been clicked', () => {
    //given
    const mock = jest.fn();
    wrapper = shallow(
      <DropDown
        on={false}
        toggle={mock}
        {...props}
      />
    );
    //when
    wrapper.dive().find(Button).simulate('click');
    // then
    expect(mock).toHaveBeenCalledWith();
  });

  it('should render no title and no icon when no props title and icon', () => {
    //when
    wrapper = shallow(
      <DropDown
        on={false}
        icon={false}
        {...props}
      />
    );
    // then
    expect(wrapper.dive().find(Button).text()).toEqual('');
  });

  it('should render just an icon with no title', () => {
    //when
    wrapper = shallow(
      <DropDown
        on={false}
        {...props}
      />
    );

    // then
    expect(wrapper.dive().find(Button).find(Icon)).toHaveLength(1);
  });

  it('should render just title with no icon', () => {
    //when
    wrapper = shallow(
      <DropDown
        on={false}
        icon={false}
        title="titleTest"
        {...props}
      />
    );

    // then
    expect(wrapper.dive().find(Button).text()).toEqual('titleTest');
    expect(wrapper.dive().find(Button).find(Icon)).toHaveLength(0);
  });

  it('should render title as function', () => {
    //when
    wrapper = shallow(
      <DropDown
        on={false}
        icon={false}
        title={() => 'titleTest'}
        {...props}
      />
    );

    // then
    expect(wrapper.dive().find(Button).text()).toEqual('titleTest');
  });
});
