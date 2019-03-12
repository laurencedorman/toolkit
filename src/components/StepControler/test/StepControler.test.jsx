import React from 'react';
import { mount } from 'enzyme';
import StepControler from '../StepControler';

describe('StepControler', () => {
  const renderMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StepControler getActiveStep={renderMock}>
        {({ props }) => (
          <div {...props}>test</div>
        )}
      </StepControler>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should set state on mount', (done) => {
    setImmediate(() => {
      expect(wrapper.state('activeStep')).toEqual(renderMock);
      done();
    }, 0);
  });
});
