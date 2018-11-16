// @flow
import React from 'react';
import { Spring, animated } from 'react-spring';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
const ToggleDown = ({
  on, toggle, children,
}: propTypes) => (
  <Spring
    force
    from={{ height: 0 }}
    to={{ height: on ? 'auto' : 0 }}
  >
    {style => (
      <animated.div
        on={on}
        onClick={toggle}
        className={styles.toggleDown}
        style={style}
      >
        {children}
      </animated.div>
    )}
  </Spring>
);

type propTypes = {
  on: boolean,
  toggle: () => void,
  children: string | Node,
};

export default ToggleDown;
