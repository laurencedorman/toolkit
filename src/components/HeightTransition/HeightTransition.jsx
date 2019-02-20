// @flow
import React from 'react';
import { animated, Spring } from 'react-spring';
import styles from './HeightTransition.module.scss';

type propTypes = { children: Node }

const HeightTransition = ({ children }:propTypes) => (
  <Spring
    native
    force
    config={{
      tension: 280, friction: 15, mass: 0.2, precision: 1,
    }}
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
