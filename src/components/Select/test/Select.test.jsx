import React from 'react';
import { shallow } from 'enzyme';
import { Select } from '../Select';

describe('Select', () => {
  let wrapper;
  const options = [{ value: 'jeanjean' }, { label: 'Jean Jean' }];

  beforeEach(() => {
    wrapper = shallow(
      <Select
        options={options}
        name="testName"
        placeholder={placeholder}
      />);
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a placeholder name', () => {
    expect(wrapper.find('placeholder').length).toEqual(1);
  });

  it('should have a  name', () => {
    expect(wrapper.find('name').length).toEqual(1);
  });
});
