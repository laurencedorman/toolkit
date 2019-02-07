// @flow
import React from 'react';
import { animated, config, Transition } from 'react-spring';
import styles from './Overlay.module.scss';

/* eslint-disable */
const Overlay = ({ onClick, on }: propTypes) => (
  <Transition
    native
    items={on}
    config={config.stiff}
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
            opacity: o,
            cursor: onClick && 'pointer',
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
}

Overlay.defaultProps = { onClick: () => null };

export default Overlay;
