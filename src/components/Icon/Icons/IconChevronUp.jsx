import React from 'react';
import PropTypes from 'prop-types';

const IconChevronUp = ({ stroke }) => (
  <g fill="none">
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={stroke}
      d="M8.7192 19.799L16 12.5182 23.2818 19.8"
    />
  </g>
);

IconChevronUp.propTypes = {
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

IconChevronUp.defaultProps = {
  stroke: '#0c193a',
};

export default IconChevronUp;
