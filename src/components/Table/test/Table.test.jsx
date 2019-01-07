import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

describe('Table', () => {
  const props = {
    data: [
      { firstName: 'Mano', lastName: 'Mano' },
    ],
    columns: [
      { Header: 'First Name', accessor: 'firstName' },
    ],
    defaultPageSize: 5,
  };

  const wrapper = shallow(<Table props={props} />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
