import React from 'react';
import { shallow } from 'enzyme';
import DropDown, { customStyles } from '../DropDown';

describe('DropDown', () => {
  const props = {
    options: [
      { value: 'test', label: 'test' },
    ],
  };

  const wrapper = shallow(<DropDown {...props} styles={customStyles} />);
  console.log(customStyles);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render one children', () => {
    expect(wrapper.children().length).toEqual(1);
  });

  it('should render container object style', () => {
    expect(customStyles.container.length).toEqual(1);
  });

  it('should render control object style', () => {
    expect(customStyles.control).toHaveLength(1);
  });
});
