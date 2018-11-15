// @flow
import React from 'react';
import { Transition } from 'react-transition-group';

import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
/* eslint-disable */
const ToggleDown = ({
 on, toggle, children, transitionTime,
}: propTypes) => (
  <Transition
    in={on}
    mountOnEnter
    unmountOnExit
    timeout={400}

  >
    {state => (
      /* eslint-disable */
      <div
        onClick={toggle}
        className={`${styles.toggleDown} ${styles[state]}`}
        role="Dialog"
      >
        {children}
      </div>
      /* eslint-disable */
    )}
  </Transition>
);
/* eslint-disable */

type propTypes = {
  on: boolean,
  toggle: () => void,
  transitionTime?: number,
  children: string | Node,
};

ToggleDown.defaultProps = {
  transitionTime: 300,
};

export default ToggleDown;
