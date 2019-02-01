import { mount } from 'enzyme';
import React from 'react';
import Prediction from '../Prediction';

describe('Prediction', () => {
  let value;
  let wrapper;

  beforeEach(() => {
    value = 'value';
    wrapper = mount(<Prediction value={value} />);
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

  it('should allow parent to retrieve html element', () => {
    const refCallback = jest.fn();
    const prediction = mount(<Prediction refCallback={refCallback} value="test" />);
    expect(refCallback).toHaveBeenCalled();
    expect(refCallback).toHaveBeenCalledWith(prediction.find('li').instance());
  });
});
