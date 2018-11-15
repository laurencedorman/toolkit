// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import Icon from '../Icon';
import Portal from '../Portal';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
const Modal = ({
  on, toggle, transitionTime, children,
}: propTypes) => (
  <Portal>
    <Transition
      in={on}
      mountOnEnter
      unmountOnExit
      timeout={transitionTime}
    >
      {state => (
        /* eslint-disable */
        <div
          onClick={toggle}
          className={`${styles.modal} ${styles[state]}`}
          role="Dialog"
        >
          <div
            className={`${styles.content} ${styles[state]}`}
            onClick={e => e.stopPropagation()}
            role="Contentinfo"
          >
            <Icon
              name="close-circle"
              size="26"
              onClick={toggle}
              className={styles.icon}
            />
            {children}
          </div>
        </div>
        /* eslint-disable */
      )}
    </Transition>
  </Portal>
);

type propTypes = {
  on: boolean,
  toggle: () => void,
  transitionTime?: number,
  children: string | Node,
};

Modal.defaultProps = {
  transitionTime: 300,
};

export default Modal;
