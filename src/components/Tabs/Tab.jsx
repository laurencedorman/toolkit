import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children, label, defaultActive }) => (
  <div
    label={label.toString()}
    defaultactive={defaultActive}
  >
    {children}
  </div>
);

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  defaultActive: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

Tab.defaultProps = { defaultActive: false };

export default Tab;
