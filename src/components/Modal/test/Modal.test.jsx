import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'components';

describe('Modal', () => {
  const wrapper = shallow(
    <Modal><p>Modal test</p></Modal>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});