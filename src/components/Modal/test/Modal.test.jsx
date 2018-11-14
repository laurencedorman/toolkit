import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
  const wrapper = shallow(
    <Modal><p>Modal test</p></Modal>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
