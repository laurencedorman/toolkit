/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import useMeasure from '../hook';

jest.mock('resize-observer-polyfill', () => ({
  __esModule: true, // this property makes it work
  default: class ResizeObserver {
    constructor(cb) {
      this.cb = cb;
    }
    observe(element) {
      this.cb([
        {
          target: {
            getBoundingClientRect() {
              return {
                width: parseInt(element.style.width, 10),
                height: parseInt(element.style.height, 10),
              };
            },
          },
        },
      ]);
    }

    unobserve() {}
  },
}));

describe('useMeasure', () => {
  it('should set init value', () => {
    let expectedSize;
    let expectedRef;
    function App() {
      const [size, ref] = useMeasure();
      expectedSize = size;
      expectedRef = ref;
      return <div />;
    }

    shallow(<App />);

    expect(expectedSize).toEqual({});
    expect(expectedRef).toEqual(React.createRef());
  });

  it('should calculate size properly', () => {
    let expectedSize;
    function App({ expectedWidth, expectedHeight }) {
      const [size, ref] = useMeasure();
      expectedSize = size;
      return (
        <div
          style={{ height: expectedHeight, width: expectedWidth }}
          ref={ref}
        />
      );
    }

    mount(<App expectedHeight={100} expectedWidth={200} />);

    expect(expectedSize).toEqual({
      width: 200,
      height: 100,
    });
  });
});