/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';
import DropDown from '../DropDown';
import Icon from '../../Icon';
import OptionContainer from '../OptionContainer';

describe('DropDown', () => {
  const defaultProps = {
    options: [
      { value: 'valueTest', label: 'labelTest' },
    ],
  };

  describe('template', () => {
    it('should match snapshot', () => {
      // When
      const wrapper = shallow(
        <DropDown
          on
          title="titleTest"
          right={true}
          disabled={true}
          active='active'
          backgroundColor='#fff'
          className='my class name'
          sideLeft={true}
          sideRight={true}
          fill='#666'
          stroke='#555'
          dataQa="testQa"
          {...defaultProps}
        />
      );

      // Then
      expect(wrapper.dive()).toMatchSnapshot();
    });

    it('should render no title and no icon when no props title and icon', () => {
      // When
      const wrapper = shallow(
        <DropDown
          on={false}
          icon={false}
          {...defaultProps}
        />
      );

      // Then
      const button = wrapper.dive().find(Button);
      expect(button.text()).toEqual('');
    });

    it('should render just an icon with no title', () => {
      // When
      const wrapper = shallow(
        <DropDown
          on={false}
          {...defaultProps}
        />
      );

      // Then
      const icon = wrapper.dive().find(Button).find(Icon);
      expect(icon).toHaveLength(1);
    });

    it('should render just title with no icon', () => {
      // When
      const wrapper = shallow(
        <DropDown
          on={false}
          icon={false}
          title="titleTest"
          {...defaultProps}
        />
      );

      // Then
      const button = wrapper.dive().find(Button);
      expect(button.text()).toEqual('titleTest');

      const icon = button.find(Icon);
      expect(icon).toHaveLength(0);
    });

    it('should render title as function', () => {
      // When
      const wrapper = shallow(
        <DropDown
          on={false}
          icon={false}
          title={() => 'titleTest'}
          {...defaultProps}
        />
      );

      // Then
      const button = wrapper.dive().find(Button);
      expect(button.text()).toEqual('titleTest');
    });
  });

  describe('props', () => {
    it('should have default props', () => {
      // Then
      expect(DropDown.defaultProps).toEqual({
          "active": null,
          "backgroundColor": "#29b9ad",
          "className": undefined,
          "dataQa": "",
          "disabled": false,
          "fill": "#ffffff",
          "icon": true,
          "right": false,
          "sideLeft": false,
          "sideRight": false,
          "stroke": "#ffffff",
          "title": "",
          "toggle": null
        }
      );

    });
  });

  describe('events', () => {
    describe('when button has been clicked', () => {
      it('should call toggle method', () => {
        // Given
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <DropDown
            on={false}
            toggle={onClickMock}
            {...defaultProps}
          />
        );
        const button = wrapper.dive().find(Button);

        // When
        button.simulate('click');

        // Then
        expect(onClickMock).toHaveBeenCalledWith();
      });
    });

    describe('when option container has been clicked', () => {
      it('should call onClick method', () => {
        // Given
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <DropDown
            on={false}
            onClick={onClickMock}
            {...defaultProps}
          />
        );
        const optionContainer = wrapper.dive().find(OptionContainer);

        // When
        optionContainer.simulate('click');

        // Then
        expect(onClickMock).toHaveBeenCalledWith();
      });
    });

    describe('when option container has been toggled', () => {
      it('should call toggle method', () => {
        // Given
        const toggleMock = jest.fn();
        const wrapper = shallow(
          <DropDown on={false} toggle={toggleMock} {...defaultProps} />
        );

        const optionContainer = wrapper
          .dive()
          .find(OptionContainer)
          .dive()
          .find({ onClick: toggleMock });

        // When
        optionContainer.simulate('click');

        // Then
        expect(toggleMock).toHaveBeenCalled();
      });
    });
  });
});
