// @flow
import React from 'react';

const Field = ({
  validate,
  normalize,
  component,
  ...rest
}:propTypes) => React.cloneElement(
  handleComponent(component),
  {
    validate,
    normalize,
    error: validate,
    ...rest,
  },
);

const handleComponent = Component => <Component />;

type propTypes = {
  validate?: boolean,
  normalize?: Object,
  component: Node,
};

Field.defaultProps = {
  validate: false,
  normalize: {},
};

export default Field;
