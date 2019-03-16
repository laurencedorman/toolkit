import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';
import Tabs from '../Tabs';


describe('Tabs', () => {
  const wrapper = shallow(
    <Tabs>
      <Tab label="Label">
        <p>Dizzle</p>
      </Tab>
    </Tabs>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
