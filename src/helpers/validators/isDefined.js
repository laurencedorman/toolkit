// @flow
function isDefined(value: any) {
  return ![null, undefined].includes(value);
}

export default isDefined;
