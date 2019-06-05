/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme/build';
import { BrowserRouter as Router } from 'react-router-dom';
import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  let wrapper;

  wrapper = shallow(<Wrapper />);

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    wrapper = shallow(
      <Wrapper>
        <Router />
      </Wrapper>
    );
    expect(wrapper.find(Router).length).toEqual(2);
  });
});
