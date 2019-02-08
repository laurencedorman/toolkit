import React from 'react';
import { animated, Spring } from 'react-spring';
import styles from './HeightTransition.module.scss';

type propTypes = { children: Node }

const HeightTransition = ({ children }:propTypes) => (
  <Spring
    native
    force
    config={{ tension: 250, friction: 20, mass: 0.2 }}
    from={{ height: 'auto' }}
    to={{ height: 'auto' }}
  >
    {style => (
      <animated.div style={style} className={styles.wrapper}>
        {children}
      </animated.div>
    )}
  </Spring>
);

export default HeightTransition;
