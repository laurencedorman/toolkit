import React from 'react';
import PropTypes from 'prop-types';

const IconChevronLeft = ({ stroke }) => (
  <>
    <g fill="none">
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
        d="M19.8404 8.72l-7.2808 7.2808 7.2818 7.2817"
      />
    </g>
  </>
);

IconChevronLeft.propTypes = {
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

IconChevronLeft.defaultProps = {
  stroke: '#0c193a',
};

export default IconChevronLeft;
