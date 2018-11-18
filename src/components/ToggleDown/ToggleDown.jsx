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
    from={{ height: 0 }}
    to={{ height: on ? 'auto' : 0 }}
  >
    {style => (
      <animated.div
        on={on}
        className={styles.toggleDown}
        style={style}
      >
        <div>
          {children}
        </div>
      </animated.div>
    )}
  </Spring>
);

type propTypes = {
  on: boolean,
  children: string | Node,
};

export default ToggleDown;
