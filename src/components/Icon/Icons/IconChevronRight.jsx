import React from 'react';
import PropTypes from 'prop-types';

const IconChevronRight = ({ stroke }) => (
  <g fill="none">
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={stroke}
      d="M12.1606 8.72l7.2808 7.2808-7.2818 7.2817"
    />
  </g>
);

IconChevronRight.propTypes = {
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

IconChevronRight.defaultProps = {
  stroke: '#0c193a',
};

export default IconChevronRight;
