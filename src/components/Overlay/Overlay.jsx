// @flow
import React from 'react';
import { animated, Transition } from 'react-spring';
import styles from './Overlay.module.scss';

/* eslint-disable */
const Overlay = ({ onClick, on, zIndex, backgroundColor }: propTypes) => (
  <Transition
    native
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

type propTypes = {
  onClick?: () => void,
  on: boolean,
  zIndex?: number,
  backgroundColor?: string,
}

Overlay.defaultProps = {
  onClick: () => null,
  zIndex: 8000,
  backgroundColor: '#000',
};

export default Overlay;
