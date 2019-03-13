import React from 'react';
import { mount } from 'enzyme';
import TabBody from '../TabBody';
import Tab from '../Tab';

describe('TabBody', () => {
  let wrapper;

  wrapper = mount(
    <TabBody activeTab="LabelOne">
      <Tab label="LabelOne">
        <h4>title</h4>
      </Tab>

      <Tab label="LabelTwo">
        <h4>title</h4>
      </Tab>
    </TabBody>,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render tab', () => {
    wrapper.setProps({ label: 'one', activeTab: 'one' });
  });

  it('should render undefined', () => {
    wrapper.setProps({ label: 'test', activeTab: 'test3' });
  });

  it('should render one child', () => {
    wrapper = mount(
      <TabBody activeTab="LabelOne">
        <Tab label="LabelOne">
          <h4>title</h4>
        </Tab>
      </TabBody>,
    );
  });
});
