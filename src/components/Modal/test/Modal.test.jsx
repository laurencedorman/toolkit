/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
  let wrapper;
  const mock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Modal on={false}>Modal content</Modal>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render modal if props is on', () => {
    wrapper = mount(<Modal on={true}>Modal content</Modal>);
    expect(wrapper.props().on).toBe(true);
  });

  it('should render header', () => {
    wrapper = mount(
      <Modal on header="header">
        Modal content
      </Modal>
    );
    expect(wrapper.props().header).toEqual('header');
  });

  it('should stop propagation on div className "content" click', () => {
    wrapper = mount(
      <Modal on onClick={mock}>
        Modal content
      </Modal>
    );
    wrapper
      .find('.content')
      .at(1)
      .simulate('click');
    expect(mock).not.toHaveBeenCalled();
  });
});
