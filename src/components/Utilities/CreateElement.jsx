import React from 'react';

const CreateElement = (type, children, props) => React.createElement(
  type,
  { ...props },
  children,
);

export default CreateElement;
