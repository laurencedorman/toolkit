import React from 'react';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';
import styles from './Overlay.module.scss';

/* eslint-disable */
const Overlay = ({ onClick, on, zIndex, backgroundColor }) => (
  <Transition
    native
    config={{ precision: .9 }}
    items={on}
    from={{ o: 0 }}
    enter={{ o: 0.5 }}
    leave={{ o: 0 }}
  >
    {on => on
      && (({ o }) => (
        <animated.div
          className={styles.overlay}
          onClick={onClick}
          style={{
            opacity: o.interpolate(o => o),
            cursor: onClick && 'pointer',
            zIndex,
            backgroundColor,
          }}
        />
      ))
    }
  </Transition>
);
/* eslint enable: */

Overlay.propTypes = {
  onClick: PropTypes.func,
  on: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  backgroundColor: PropTypes.string,
};

Overlay.defaultProps = {
  onClick: null,
  zIndex: 8000,
  backgroundColor: '#000',
};

export default Overlay;
