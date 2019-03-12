import React from 'react';
import { mount } from 'enzyme';
import Portal from '../Portal';

describe('Portal', () => {
  let wrapper;
  let ismounted;
  const root = global.document.createElement('div');
  root.setAttribute('id', 'portalRoot');

  const body = global.document.querySelector('body');
  body.appendChild(root);

  const el = global.document.createElement('div');
  root.appendChild(el);

  beforeEach(() => {
    ismounted = true;
    if (ismounted) {
      wrapper = mount(<Portal><div>children</div></Portal>);
    }
  });

  afterEach(() => {
    ismounted = false;
    wrapper.unmount();
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
