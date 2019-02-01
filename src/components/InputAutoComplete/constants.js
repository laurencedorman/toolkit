export const BLUR_CLOSING_DELAY = 250;
export const HIGHLIGHT_TOP_MARGIN = 10;
export const MIN_NUMBER_OF_CHARACTERS = 3;
export const PREDICT_DEBOUNCE_DELAY = 150;

/**
 * @see {@link https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes}
 */
export const KEYMAP = {
  ENTER: 13,
  ESCAPE: 27,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
};

export type Prediction = {
  label: string,
  getTopOffset?: () => number,
  value: string,
};

export const STATUS = {
  KEEP_TYPING: 'KEEP_TYPING',
  LOADING: 'LOADING',
  NO_RESULT: 'NO_RESULT',
};
