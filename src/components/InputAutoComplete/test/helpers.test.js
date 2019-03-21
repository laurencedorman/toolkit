/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { highlight } from '../helpers';

describe('highlight', () => {
  // Test cases
  [
    // 1 highlighted text in the middle
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      highlightText: 'sum dolor sit am',
      result: [
        { strong: false, text: 'Lorem ip' },
        { strong: true, text: 'sum dolor sit am' },
        { strong: false, text: 'et, consectetur adipiscing elit.' },
      ],
    },
    // 1 highlighted text at the end
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      highlightText: 'lit.',
      result: [
        { strong: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing e' },
        { strong: true, text: 'lit.' },
      ],
    },
    // 1 highlighted text at the beginning
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      highlightText: 'lorem ipsum',
      result: [
        { strong: true, text: 'Lorem ipsum' },
        { strong: false, text: ' dolor sit amet, consectetur adipiscing elit.' },
      ],
    },
    // 2 highlighted texts
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipdoloriscing elit.',
      highlightText: 'dolor',
      result: [
        { strong: false, text: 'Lorem ipsum ' },
        { strong: true, text: 'dolor' },
        { strong: false, text: ' sit amet, consectetur adip' },
        { strong: true, text: 'dolor' },
        { strong: false, text: 'iscing elit.' },
      ],
    },
    // No highlighted text
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipdoloriscing elit.',
      result: [{
        strong: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipdoloriscing elit.',
      }],
    },
    // Highlighted text not found
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipdoloriscing elit.',
      highlightText: 'chat',
      result: [{
        strong: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipdoloriscing elit.',
      }],
    },
    // Text with case/accent
    {
      text: 'Lorem ipsum dolor Amélie sit amet, consectetur adipdoloriscing elit.',
      highlightText: 'amelie',
      result: [
        { strong: false, text: 'Lorem ipsum dolor ' },
        { strong: true, text: 'Amélie' },
        { strong: false, text: ' sit amet, consectetur adipdoloriscing elit.' },
      ],
    },
  ].forEach(({ text, highlightText, result }, index) => {
    it(`should highlight text (test case ${index})`, () => {
      expect(highlight(text, highlightText)).toEqual(result);
    });
  });

  it('should work in a degraded way if String.prototype.normalize is undefined', () => {
    const { normalize } = String.prototype;
    // eslint-disable-next-line no-extend-native
    const reset = () => { String.prototype.normalize = normalize; };
    delete String.prototype.normalize;

    try {
      // Not accent insensitive
      expect(highlight('dolor Amélie sit', 'Amelie'))
        .toEqual([{ strong: false, text: 'dolor Amélie sit' }]);

      // But works with exact sentence
      expect(highlight('dolor Amélie sit', 'Amélie'))
        .toEqual([
          { strong: false, text: 'dolor ' },
          { strong: true, text: 'Amélie' },
          { strong: false, text: ' sit' },
        ]);

      reset();
    } catch (error) {
      reset();
      throw error;
    }
  });
});
