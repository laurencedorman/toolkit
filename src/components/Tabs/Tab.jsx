// @flow
import React from 'react';

const Tab = ({ children, label }:propTypes) => (
  <div label={label.toString()}>
    {children}
  </div>
);


type propTypes = {
  children: Node,
  label: string | () => void,
  defaultActive?: boolean,
}

Tab.defaultProps = { defaultActive: false };

export default Tab;
