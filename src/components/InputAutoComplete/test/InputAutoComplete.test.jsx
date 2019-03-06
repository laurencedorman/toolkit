/* eslint-disable no-await-in-loop,no-restricted-syntax */
import { mount } from 'enzyme';
import React from 'react';
import { InputAutoComplete } from 'components';
import { MIN_NUMBER_OF_CHARACTERS, STATUS } from '../constants';
import Predictions from '../Predictions';
import Status from '../Status';

describe('InputAutoComplete', () => {
  let predicts;
  let predictions;
  let simulateInput;
  let wrapper;

  beforeEach(() => {
    predictions = (new Array(20))
      .fill('test')
      .map((value, index) => `${value}${index}`)
      .map(value => ({ label: `${value}-label`, value }));

    predicts = [
      predictions,
      value => Promise.resolve(
        predictions.filter(prediction => prediction.value.indexOf(value) === 0),
      ),
    ];

    wrapper = mount(<InputAutoComplete predict={predicts[0]} />);

    simulateInput = async (value) => {
      jest.useFakeTimers();
      const promise = wrapper.find('Input').prop('onChange')({ target: { value } });
      jest.runAllTimers();
      await promise;
      jest.useRealTimers();
      wrapper.update();
    };
  });

  it('should display a specific status when minimal number of characters is not reached', async () => {
    for (let i = 1; i < MIN_NUMBER_OF_CHARACTERS; i += 1) {
      await simulateInput('a'.repeat(i));
      expect(wrapper.find(Status)).toHaveLength(1);
      expect(wrapper.find(Status).prop('status')).toEqual(STATUS.KEEP_TYPING);
    }
  });

  it('should display a specific status when there is not result', async () => {
    await simulateInput('chat');
    expect(wrapper.find(Status)).toHaveLength(1);
    expect(wrapper.find(Status).prop('status')).toEqual(STATUS.NO_RESULT);
  });

  it('should allow to provide translations to Status component', async () => {
    const translations = { keepTyping: 'keepTyping', noResult: 'keepTyping' };
    wrapper.setProps({ translations });

    await simulateInput('hello');
    expect(wrapper.find(Status)).toHaveLength(1);
    expect(wrapper.find(Status).prop('translations')).toEqual(translations);
  });

  it('should display predictions', async () => {
    for (const predict of predicts) {
      wrapper.setProps({ predict });

      await simulateInput('test');
      expect(wrapper.find(Predictions)).toHaveLength(1);
      expect(wrapper.find(Predictions).prop('predictions')).toEqual(predictions);
    }
  });

  it('should highlight first prediction', async () => {
    await simulateInput('test');
    expect(wrapper.find(Predictions)).toHaveLength(1);
    expect(wrapper.find(Predictions).prop('highlightedPrediction')).toEqual(predictions[0]);
  });

  it('should allow to filter predictions', async () => {
    for (const predict of predicts) {
      wrapper.setProps({ predict });

      await simulateInput('test');
      expect(wrapper.find(Predictions)).toHaveLength(1);
      expect(wrapper.find(Predictions).prop('predictions')).toHaveLength(20);

      await simulateInput('test1');
      expect(wrapper.find(Predictions)).toHaveLength(1);
      expect(wrapper.find(Predictions).prop('predictions')).toHaveLength(11);
    }
  });

  it('should allow to navigate using keyboard', async () => {
    const preventDefault = jest.fn();
    const getHighlightedPrediction = () => wrapper.find(Predictions).prop('highlightedPrediction');
    const simulateKeyDown = (keyCode) => {
      wrapper.find('Input').prop('onKeyDown')({ keyCode, preventDefault });
      wrapper.update();
    };

    const keyCode = {
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      UP: 38,
    };

    await simulateInput('test');
    expect(wrapper.find(Predictions)).toHaveLength(1);
    expect(getHighlightedPrediction()).toEqual(predictions[0]);

    simulateKeyDown(keyCode.DOWN);
    simulateKeyDown(keyCode.DOWN);
    expect(getHighlightedPrediction()).toEqual(predictions[2]);

    simulateKeyDown(keyCode.UP);
    expect(getHighlightedPrediction()).toEqual(predictions[1]);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.contains(Predictions)).toEqual(false);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.find(Predictions)).toHaveLength(1);
    expect(getHighlightedPrediction()).toEqual(predictions[1]);

    simulateKeyDown(keyCode.ESCAPE);
    expect(wrapper.contains(Predictions)).toEqual(false);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.find(Predictions)).toHaveLength(1);
    expect(getHighlightedPrediction()).toEqual(predictions[1]);

    simulateKeyDown(keyCode.PAGE_DOWN);
    expect(getHighlightedPrediction()).toEqual(predictions[19]);

    simulateKeyDown(keyCode.PAGE_UP);
    expect(getHighlightedPrediction()).toEqual(predictions[0]);

    simulateKeyDown(keyCode.END);
    expect(getHighlightedPrediction()).toEqual(predictions[19]);

    simulateKeyDown(keyCode.HOME);
    expect(getHighlightedPrediction()).toEqual(predictions[0]);

    simulateKeyDown(keyCode.UP);
    expect(getHighlightedPrediction()).toEqual(predictions[19]);

    simulateKeyDown(keyCode.DOWN);
    expect(getHighlightedPrediction()).toEqual(predictions[0]);
  });

  it('should manage focus', async () => {
    const inputComponent = wrapper.find('Input');

    inputComponent.prop('onFocus')();
    wrapper.update();
    expect(wrapper.contains(Predictions)).toEqual(false);

    await simulateInput('test');
    expect(wrapper.find(Predictions)).toHaveLength(1);

    jest.useFakeTimers();
    inputComponent.prop('onBlur')();
    jest.runAllTimers();
    jest.useRealTimers();
    wrapper.update();
    expect(wrapper.contains(Predictions)).toEqual(false);

    inputComponent.prop('onFocus')();
    wrapper.update();
    expect(wrapper.find(Predictions)).toHaveLength(1);
  });

  it('should allow parent to handle prediction selection', async () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });

    await simulateInput('test');
    expect(wrapper.find(Predictions)).toHaveLength(1);

    wrapper.find(Predictions).prop('onClick')(predictions[0]);
    expect(onChange).toHaveBeenCalledWith('test0');
  });

  it('should highlight prediction on mouseover', async () => {
    await simulateInput('test');
    expect(wrapper.find(Predictions)).toHaveLength(1);
    wrapper.find(Predictions).prop('onMouseOver')(predictions[3]);
    wrapper.update();
    expect(wrapper.find(Predictions).prop('highlightedPrediction')).toEqual(predictions[3]);
  });

  describe('predict as async function', () => {
    beforeEach(() => {
      wrapper.setProps({
        predict: predicts[1],
      });
    });

    it('should debounce calls to predict function', async () => {
      const predict = jest.fn(() => Promise.resolve([]));
      wrapper.setProps({ predict });

      for (let i = 0; i < 10; i += 1) {
        wrapper.find('Input').prop('onChange')({ target: { value: 'jlh' } });
      }

      await simulateInput('test');
      expect(predict).toHaveBeenCalled();
    });

    it('should handle errors in predict function', async () => {
      const error = new Error();
      const userErrorMessage = 'Unable to predict :(';

      wrapper.setProps({ predict: () => { throw error; } });
      await simulateInput('test');
      expect(wrapper.state('errorMessage')).toEqual(userErrorMessage);

      wrapper.setProps({ predict: null });
      await simulateInput('test');
      expect(wrapper.state('errorMessage')).toEqual(null);

      const unableToPredict = 'unableToPredict';
      wrapper.setProps({ predict: () => Promise.reject(error), translations: { unableToPredict } });
      await simulateInput('test');
      expect(wrapper.state('errorMessage')).toEqual(unableToPredict);
    });
  });
});
