/* eslint-disable no-await-in-loop,no-restricted-syntax */
import { mount } from 'enzyme';
import React from 'react';
import { InputAutoComplete } from 'components';
import { MIN_NUMBER_OF_CHARACTERS, STATUS } from '../constants';
import Predictions from '../Predictions';
import Status from '../Status';

describe('InputAutoComplete', () => {
  let autocompletes;
  let predictions;
  let simulateInput;
  let wrapper;

  beforeEach(() => {
    predictions = (new Array(20))
      .fill('test')
      .map((value, index) => `${value}${index}`)
      .map(value => ({ label: `${value}-label`, value }));

    autocompletes = [
      predictions,
      value => Promise.resolve(
        predictions.filter(prediction => prediction.value.indexOf(value) === 0),
      ),
    ];

    wrapper = mount(<InputAutoComplete autocomplete={autocompletes[0]} />);

    simulateInput = async (value) => {
      jest.useFakeTimers();
      const promise = wrapper.find('Input').prop('onChange')({ target: { value } });
      jest.runAllTimers();
      await promise;
      jest.useRealTimers();
      wrapper.update();
    };
  });

  it('should display a specific message when minimal number of characters is not reached', async () => {
    for (let i = 1; i < MIN_NUMBER_OF_CHARACTERS; i += 1) {
      await simulateInput('a'.repeat(i));
      expect(wrapper.contains(Status)).toEqual(true);
      expect(wrapper.find(Status).prop('status')).toEqual(STATUS.KEEP_TYPING);
    }
  });

  it('should display a custom message when minimal number of characters is not reached', async () => {
    const transKeepTyping = 'miaou';
    wrapper.setProps({ transKeepTyping });

    await simulateInput('a');
    expect(wrapper.contains(Status)).toEqual(true);
    expect(wrapper.find(Status).prop('status')).toEqual(STATUS.KEEP_TYPING);
    expect(wrapper.find(Status).prop('transKeepTyping')).toEqual(transKeepTyping);
  });

  it('should display a specific message when there is not result', async () => {
    await simulateInput('chat');
    expect(wrapper.contains(Status)).toEqual(true);
    expect(wrapper.find(Status).prop('status')).toEqual(STATUS.NO_RESULT);
  });

  it('should display a custom message when there is not result', async () => {
    const transNoResult = 'Too bad :(';
    wrapper.setProps({ transNoResult });

    await simulateInput('hello');
    expect(wrapper.contains(Status)).toEqual(true);
    expect(wrapper.find(Status).prop('status')).toEqual(STATUS.NO_RESULT);
    expect(wrapper.find(Status).prop('transNoResult')).toEqual(transNoResult);
  });

  it('should display predictions', async () => {
    for (const autocomplete of autocompletes) {
      wrapper.setProps({ autocomplete });

      await simulateInput('test');
      expect(wrapper.contains(Predictions)).toEqual(true);
      expect(wrapper.find(Predictions).prop('predictions')).toEqual(predictions);
    }
  });

  it('should highlight first prediction', async () => {
    await simulateInput('test');
    expect(wrapper.contains(Predictions)).toEqual(true);
    expect(wrapper.find(Predictions).prop('highlightedPrediction')).toEqual(predictions[0]);
  });

  it('should allow to filter predictions', async () => {
    for (const autocomplete of autocompletes) {
      wrapper.setProps({ autocomplete });

      await simulateInput('test');
      expect(wrapper.contains(Predictions)).toEqual(true);
      expect(wrapper.find(Predictions).prop('predictions')).toHaveLength(20);

      await simulateInput('test1');
      expect(wrapper.contains(Predictions)).toEqual(true);
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
    expect(wrapper.contains(Predictions)).toEqual(true);
    expect(getHighlightedPrediction()).toEqual(predictions[0]);

    simulateKeyDown(keyCode.DOWN);
    simulateKeyDown(keyCode.DOWN);
    expect(getHighlightedPrediction()).toEqual(predictions[2]);

    simulateKeyDown(keyCode.UP);
    expect(getHighlightedPrediction()).toEqual(predictions[1]);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.contains(Predictions)).toEqual(false);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.contains(Predictions)).toEqual(true);
    expect(getHighlightedPrediction()).toEqual(predictions[1]);

    simulateKeyDown(keyCode.ESCAPE);
    expect(wrapper.contains(Predictions)).toEqual(false);

    simulateKeyDown(keyCode.ENTER);
    expect(wrapper.contains(Predictions)).toEqual(true);
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
    expect(wrapper.contains(Predictions)).toEqual(true);

    jest.useFakeTimers();
    inputComponent.prop('onBlur')();
    jest.runAllTimers();
    jest.useRealTimers();
    wrapper.update();
    expect(wrapper.contains(Predictions)).toEqual(false);

    inputComponent.prop('onFocus')();
    wrapper.update();
    expect(wrapper.contains(Predictions)).toEqual(true);
  });

  it('should allow parent to handle prediction selection', async () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });

    await simulateInput('test');
    expect(wrapper.contains(Predictions)).toEqual(true);

    wrapper.find(Predictions).prop('onClick')(predictions[0]);
    expect(onChange).toHaveBeenCalledWith('test0');
  });

  it('should highlight prediction on mouseover', async () => {
    await simulateInput('test');
    expect(wrapper.contains(Predictions)).toEqual(true);
    wrapper.find(Predictions).prop('onMouseOver')(predictions[3]);
    wrapper.update();
    expect(wrapper.find(Predictions).prop('highlightedPrediction')).toEqual(predictions[3]);
  });

  describe('autocomplete as async function', () => {
    beforeEach(() => {
      wrapper.setProps({
        autocomplete: autocompletes[1],
      });
    });

    it('should debounce calls to autocomplete function', async () => {
      const autocomplete = jest.fn(() => Promise.resolve([]));
      wrapper.setProps({ autocomplete });

      for (let i = 0; i < 10; i += 1) {
        wrapper.find('Input').prop('onChange')({ target: { value: 'jlh' } });
      }

      await simulateInput('test');
      expect(autocomplete).toHaveBeenCalled();
    });

    it('should handle errors in autocomplete function', async () => {
      const error = new Error('Im not an autocomplete function ^^');
      const userErrorMessage = 'Unable to predict :(';

      const testAutocompleteError = async (autocomplete) => {
        wrapper.setProps({ autocomplete });
        await expect(simulateInput('test')).rejects.toThrow(error.message);
      };

      await testAutocompleteError(() => { throw error; });
      expect(wrapper.state('errorMessage')).toEqual(userErrorMessage);

      wrapper.setProps({ autocomplete: null });
      await simulateInput('test');
      expect(wrapper.state('errorMessage')).toEqual(null);

      await testAutocompleteError(() => Promise.reject(error));
      expect(wrapper.state('errorMessage')).toEqual(userErrorMessage);
    });
  });
});
