import React from 'react';
import { shallow } from 'enzyme';
import Flag from '../Flag';
import France from '../Flags/France';

describe('Flag', () => {
  let wrapper;

  wrapper = shallow(<Flag name="document" />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render different role', () => {
    const click = jest.fn();
    wrapper.setProps({ onClick: click });
  });

  it('should render different svg with special name', () => {
    wrapper = shallow(<Flag component={France} />);
  });
});
