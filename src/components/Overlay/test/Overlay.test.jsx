import React from 'react';
import { mount } from 'enzyme';
import { Overlay } from 'components';

describe('Overlay', () => {
  const props = {
    zIndex: 8000,
    backgroundColor: '#000',
  };

  const wrapper = mount(
    <Overlay on {...props} />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have onClick action', () => {
    wrapper.find('div').simulate('click');
  });
});
