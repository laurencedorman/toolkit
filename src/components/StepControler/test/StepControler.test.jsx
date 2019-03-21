/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import StepControler from '../StepControler';

describe('StepControler', () => {
  const renderMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
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
