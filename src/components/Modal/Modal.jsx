// @flow
import React, { Component } from 'react';
import {
  Transition, animated, interpolate, config,
} from 'react-spring';
import cn from 'classnames';

import { Icon, Portal } from 'components';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  on: boolean,
  toggle: () => void,
  children: string | Node,
  className?: string,
};
/* eslint-disable */
export default class Modal extends Component<propTypes>{
  static defaultProps = { className: '' };

  render() {
    const { on, toggle, children, className } = this.props;

    const classNames = cn(
      styles.content,
      className,
    );

    return (
      <Portal>
        <Transition
          native
          config={config.stiff}
          items={on}
          from={{ o: 0, s: 0.6, y: '-200px' }}
          enter={{ o: 1, s: 1, y: '0px' }}
          leave={{ o: 0, s: 0.6, y: '200px' }}
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
                    className={classNames}
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
                      name="close"
                      size="16"
                      onClick={toggle}
                      className={styles.icon}
                    />
                    {children}
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
