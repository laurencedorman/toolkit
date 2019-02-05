// @flow
import React from 'react';

const Tab = ({ children, label, defaultActive }:propTypes) => (
  <div
    label={label}
    defaultActive={defaultActive ? 1 : 0}
    key={label}
  >
    {children}
  </div>
);

type propTypes = {
  children: Node,
  label: string,
  defaultActive?: boolean,
}

Tab.defaultProps = { defaultActive: false };

export default Tab;
