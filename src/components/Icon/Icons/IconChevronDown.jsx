import React from 'react';
import PropTypes from 'prop-types';

const IconChevronDown = ({ stroke }) => (
  <>
    <g fill="none">
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
        d="M8.7192 12.1192L16 19.4l7.2818-7.2818"
      />
    </g>
  </>
);

IconChevronDown.propTypes = {
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

IconChevronDown.defaultProps = {
  stroke: '#0c193a',
};

export default IconChevronDown;
