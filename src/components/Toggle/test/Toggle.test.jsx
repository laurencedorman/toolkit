import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../Toggle';

describe('Toggle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Toggle>
        {() => (
          <div>
            test
          </div>
        )}
      </Toggle>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
