// @flow

type RichTextType = { strong: boolean, text: string };

export function highlight(text: string, highlightText?: string = ''): RichTextType[] {
  // String.prototype.normalize does not exist in IE11 and right now (05/03/19) polyfill.io does
  // not provide that polyfill so it will be accent sensitive in IE11 as it is an acceptable
  // behavior.
  const formatString = s => (s.normalize ? s.normalize('NFD') : s).replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(`(${formatString(highlightText)})`, 'gi');

  if (highlightText.length === 0) {
    return [{ strong: false, text }];
  }

  const normalizedText = formatString(text);

  return normalizedText
    .split(regex)
    .map((value, index) => {
      const indexA = normalizedText.indexOf(value);
      return { strong: (index % 2) === 1, text: text.substring(indexA, indexA + value.length) };
    })
    .filter(obj => obj.text.length > 0);
}
