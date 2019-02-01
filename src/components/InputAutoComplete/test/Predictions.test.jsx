import { mount } from 'enzyme';
import React from 'react';
import Predictions from '../Predictions';
import Prediction from '../Prediction';

describe('Predictions', () => {
  let predictions;
  let wrapper;

  beforeEach(() => {
    predictions = (new Array(20))
      .fill('test')
      .map((value, index) => `${value}${index}`)
      .map(value => ({ label: `${value}-label`, value }));

    wrapper = mount(<Predictions predictions={predictions} />);
  });

  it('should display predictions', () => {
    expect(wrapper.find(Prediction)).toHaveLength(20);

    const firstPrediction = wrapper.find(Prediction).at(0);
    const { label, value } = predictions[0];
    expect(firstPrediction.prop('label')).toEqual(label);
    expect(firstPrediction.prop('value')).toEqual(value);
  });

  it('should transfer highlightValue to Prediction components', () => {
    const highlightValue = 'hello';
    wrapper.setProps({ highlightValue });
    wrapper.find(Prediction)
      .forEach(node => expect(node.prop('highlightValue')).toEqual(highlightValue));
  });

  it('should allow to highlight a prediction', () => {
    wrapper.setProps({ highlightedPrediction: predictions[4] });
    wrapper.find(Prediction)
      .forEach((node, index) => expect(node.prop('highlighted')).toEqual(index === 4));
  });

  it('should allow to provide selected prediction', () => {
    wrapper.setProps({ selectedPrediction: predictions[5] });
    wrapper.find(Prediction)
      .forEach((node, index) => expect(node.prop('selected')).toEqual(index === 5));
  });

  it('should allow parent to handle prediction click', () => {
    const onClick = jest.fn();
    wrapper.setProps({ onClick });
    wrapper.find(Prediction).at(0).prop('onClick')();
    expect(onClick).toHaveBeenCalled();
  });

  it('should allow parent to handle prediction mouseover', () => {
    const onMouseOver = jest.fn();
    wrapper.setProps({ onMouseOver });
    wrapper.find(Prediction).at(0).prop('onMouseOver')();
    expect(onMouseOver).toHaveBeenCalled();
  });

  it('should set getTopOffset method in predictions', () => {
    expect(typeof predictions[0].getTopOffset).toEqual('function');
    expect(typeof predictions[0].getTopOffset()).toEqual('number');
  });
});
