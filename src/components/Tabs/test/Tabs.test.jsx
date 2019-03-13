import React from 'react';
import { mount } from 'enzyme';
import Tab from '../Tab';
import Tabs from '../Tabs';


describe('Tabs', () => {
  const wrapper = mount(
    <Tabs>
      <Tab label="LabelOne">
        <h4>title</h4>
      </Tab>

      <Tab label="LabelTwo" defaultActive>
        <h4>title</h4>
      </Tab>
    </Tabs>,
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
