import React from 'react';
import { shallow } from 'enzyme';
import Flag from '../Flag';
import Belgium from '../Flags/Belgium';
import France from '../Flags/France';

describe('Flag', () => {
  const wrapper = shallow(<Flag component={Belgium} />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render different role', () => {
    const click = jest.fn();
    wrapper.setProps({ onClick: click });
  });

  it('should render different svg with special name', () => {
    wrapper.setProps({ component: France });
  });
});
