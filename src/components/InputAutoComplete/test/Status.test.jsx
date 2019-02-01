import { Loader } from 'components';
import { mount } from 'enzyme';
import React from 'react';
import Status from '../Status';
import { STATUS } from '../constants';

describe('Status', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Status status={STATUS.NO_RESULT} />);
  });

  it('should allow to display default keep typing status', () => {
    wrapper.setProps({ status: STATUS.KEEP_TYPING });
    expect(wrapper.find('div').text()).toEqual('Keep typing ✍️');
  });

  it('should allow to display custom keep typing status', () => {
    const transKeepTyping = 'transKeepTyping';
    wrapper.setProps({ status: STATUS.KEEP_TYPING, transKeepTyping });
    expect(wrapper.find('div').text()).toEqual(transKeepTyping);
  });

  it('should allow to display loader', () => {
    wrapper.setProps({ status: STATUS.LOADING });
    expect(wrapper.contains(<Loader />)).toEqual(true);
  });

  it('should allow to display default no result status', () => {
    wrapper.setProps({ status: STATUS.NO_RESULT });
    expect(wrapper.find('div').text()).toEqual('No result 😞');
  });

  it('should allow to display custom no result status', () => {
    const transNoResult = 'transNoResult';
    wrapper.setProps({ status: STATUS.NO_RESULT, transNoResult });
    expect(wrapper.find('div').text()).toEqual(transNoResult);
  });

  it('should throw an error if provided status is invalid', () => {
    expect(() => mount(<Status status="chat" />)).toThrow('Unknown status');
  });
});
