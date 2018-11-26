// @flow
import React, { Component } from 'react';
import {
  Transition, animated, interpolate, config,
} from 'react-spring';

import { Icon, Portal } from 'components';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  on: boolean,
  toggle: () => void,
  children: string | Node,
};
/* eslint-disable */
export default class Modal extends Component<propTypes>{
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey, false);
  }

  handleKey = e => {
    const { on, toggle } = this.props;

    const keys = {
      Escape: () => {
        e.preventDefault();
        !on
          ? e.stopPropagation()
          : toggle();
      },
    };

    keys[e.key]
      && keys[e.key]()
  };

  render() {
    const { on, toggle, children } = this.props;

    return (
      <Portal>
        <Transition
          native
          config={config.stiff}
          items={on}
          from={{ o: 0.01, s: 0.6, y: '-200px' }}
          enter={{ o: 1, s: 1, y: '0px' }}
          leave={{ o: 0.01, s: 0.6, y: '200px' }}
        >
          {on => on
            && (
              ({ o, s, y}) => (
                <animated.div
                  onClick={toggle}
                  className={styles.modal}
                  role="Dialog"
                  style={{
                    opacity: o.interpolate(o => o)
                  }}
                >
                  <animated.div
                    className={styles.content}
                    onClick={e => e.stopPropagation()}
                    role="Contentinfo"
                    style={{
                      transform: interpolate(
                        [s, y],
                        (s, y) => `scale(${s}) translate3d(0, ${y}, 0)`
                      )
                    }}
                  >
                    <Icon
                      name="close-circle"
                      size="26"
                      onClick={toggle}
                      className={styles.icon}
                    />
                    <div>{children}</div>
                  </animated.div>
                </animated.div>
              )
            )
          }
        </Transition>
      </Portal>
    )
  }
}
/* eslint-enable */
