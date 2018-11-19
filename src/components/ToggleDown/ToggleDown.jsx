// @flow
import React from 'react';
import { Spring, animated, config } from 'react-spring';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
const ToggleDown = ({
  on, children,
}: propTypes) => (
  <Spring
    force
    config={{ ...config.default, precision: 1 }}
    from={{ maxHeight: 0 }}
    to={{ maxHeight: on ? 500 : 0 }}
  >
    {style => (
      <animated.div
        className={styles.toggleDown}
        style={style}
      >
        <animated.div style={style}>
          {children}
        </animated.div>
      </animated.div>
    )}
  </Spring>
);

type propTypes = {
  on: boolean,
  children: string | Node,
};

export default ToggleDown;
