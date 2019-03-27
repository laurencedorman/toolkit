import React from 'react';
import { shallow } from 'enzyme';
import Flag from '../Flag';
import Belgium from '../Flags/Belgium';
import France from '../Flags/France';

describe('Flag', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Flag component={Belgium}/>);
    wrapper.setProps({ dataQa: 'data-qa' });
  });

  describe('template', () => {
    it('should render without crash with layoutContainer', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render different svg with special name', () => {
      // When
      wrapper.setProps({ component: France });

      // Then
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should contain role button when onclick is undefined', () => {
      // When
      wrapper.setProps({ onClick: () => false });

      // Then
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('events', () => {
    it('should call "click" method on click', () => {
      // Given
      const click = jest.fn();
      wrapper.setProps({ onClick: click });

      // When
      wrapper.find('div').simulate('click');

      // Then
      expect(click).toBeCalledWith();
    });

    it('should call "keyPress" method on keyPress', () => {
      // Given
      const keyPress = jest.fn();
      wrapper.setProps({ onKeyPress: keyPress });

      // When
      wrapper.find('div').simulate('keyPress');

      // Then
      expect(keyPress).toBeCalledWith();
    });
  });
});
