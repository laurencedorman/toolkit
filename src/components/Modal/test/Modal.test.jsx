import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'components';

describe('Modal', () => {
  const wrapper = mount(
    <Modal><p>Modal test</p></Modal>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render modal if props is on', () => {
    wrapper.setProps({ on: true });
  });
});
