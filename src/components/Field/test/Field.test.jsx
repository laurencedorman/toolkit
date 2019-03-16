import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';
import Input from '../../Input';

describe('Field', () => {
  const wrapper = shallow(
    <Field
      component={Input}
      label="test"
      type="text"
      id="test"
      name="test"
    />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
