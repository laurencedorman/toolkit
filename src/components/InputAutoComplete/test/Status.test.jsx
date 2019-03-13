import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../Loader';
import Status, { STATUS } from '../Status';

describe('Status', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Status status={STATUS.NO_RESULT} />);
  });

  it('should allow to display default keep typing status', () => {
    wrapper.setProps({ status: STATUS.KEEP_TYPING });
    expect(wrapper.find('div').text()).toEqual('Keep typing ✍️');
  });

  it('should allow to display loader', () => {
    wrapper.setProps({ status: STATUS.LOADING });
    expect(wrapper.contains(<Loader />)).toEqual(true);
  });

  it('should allow to display default no result status', () => {
    wrapper.setProps({ status: STATUS.NO_RESULT });
    expect(wrapper.find('div').text()).toEqual('No result 😞');
  });

  it('should allow to display custom status', () => {
    const keepTyping = 'keepTyping';
    const noResult = 'noResult';
    const translations = { keepTyping, noResult };

    wrapper.setProps({ status: STATUS.KEEP_TYPING, translations });
    expect(wrapper.find('div').text()).toEqual(keepTyping);

    wrapper.setProps({ status: STATUS.NO_RESULT });
    expect(wrapper.find('div').text()).toEqual(noResult);
  });

  it('should throw an error if provided status is invalid', () => {
    expect(() => shallow(<Status status="chat" />)).toThrow('Unknown status');
  });
});
