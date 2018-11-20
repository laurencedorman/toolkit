import React from 'react';
import { shallow } from 'enzyme';
import InputCheckGroup from '../InputCheckGroup';
import InputCheck from '../InputCheck';

describe('InputCheckGroup', () => {
  const state = {
    selected: 'mp3',
    options: [
      {
        label: 'Vinyle',
        value: 'vinyle',
      },
      {
        label: 'CD',
        value: 'cd',
      },
      {
        label: 'Mp3',
        value: 'mp3',
      },
    ],
  };

  const wrapper = shallow(
    <InputCheckGroup
      type="radio"
      inputGroupTitle="test Group :"
      groupName="name"
      options={state.options}
    />,
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render input child', () => {
    expect(wrapper.find(InputCheck).length).toEqual(3);
  });
});
