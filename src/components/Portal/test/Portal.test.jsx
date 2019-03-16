import React from 'react';
import { shallow } from 'enzyme';
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
      wrapper = shallow(<Portal><div>children</div></Portal>);
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
