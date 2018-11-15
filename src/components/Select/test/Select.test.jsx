import React from 'react';
import { shallow } from 'enzyme';
import Select from '../Select';

describe('Select', () => {
  let wrapper;
  const options = [{ value: 'jeanjean' }, { label: 'Jean Jean' }];

  beforeEach(() => {
    wrapper = shallow(
      <Select
        options={options}
        name="testName"
        placeholder="placeholder"
<<<<<<< HEAD
      />,
    );
=======
      />);
>>>>>>> rebase and fix packages install
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
