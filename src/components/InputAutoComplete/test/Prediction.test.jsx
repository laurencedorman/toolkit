/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { shallow } from 'enzyme';
import React from 'react';
import Prediction from '../Prediction';

describe('Prediction', () => {
  let value;
  let wrapper;

  beforeEach(() => {
    value = 'value';
    wrapper = shallow(<Prediction value={value} />);
  });

  it('should display prediction content', () => {
    expect(wrapper.text()).toEqual(value);

    const label = 'label';
    wrapper.setProps({ label });
    expect(wrapper.text()).toEqual(`${value} - ${label}`);
  });

  it('should allow to be highlighted', () => {
    wrapper.setProps({ highlighted: true });
    expect(wrapper.find('li').hasClass('highlighted')).toEqual(true);
  });

  it('should allow to be highlighted', () => {
    wrapper.setProps({ highlighted: true });
    expect(wrapper.find('li').hasClass('highlighted')).toEqual(true);
  });

  it('should allow to be selected', () => {
    wrapper.setProps({ selected: true });
    expect(wrapper.find('li').hasClass('selected')).toEqual(true);
    expect(wrapper.find('li').prop('aria-selected')).toEqual(true);
  });

  it('should allow to highlight text', () => {
    wrapper.setProps({ highlightValue: 'val' });
    expect(wrapper.find('li').html()).toContain('<mark>val</mark>');
  });

  [
    { event: 'click', property: 'onClick' },
    { event: 'focus', property: 'onFocus' },
    { event: 'keydown', property: 'onKeyDown' },
    { event: 'mouseover', property: 'onMouseOver' },
  ].forEach(({ event, property }) => {
    it(`should allow parent to handle ${event} event`, () => {
      const mock = jest.fn();
      wrapper.setProps({ [property]: mock });
      wrapper.find('li').simulate(event);
      expect(mock).toHaveBeenCalled();
    });
  });
});
