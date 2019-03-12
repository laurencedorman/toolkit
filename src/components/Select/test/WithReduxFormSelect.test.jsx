import React from 'react';
import { shallow } from 'enzyme';
import WithReduxFormSelect from '../WithReduxFormSelect';

describe('Card', () => {
  const props = {
    meta: {
      error: false,
      touched: false,
    },
    input: {
      value: 'test',
    },
  };

  const wrapper = shallow(
    <WithReduxFormSelect
      {...props}
    />,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render error', () => {
    wrapper.setProps({ meta: { error: true, touched: true } });
  });
});
