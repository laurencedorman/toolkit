// @flow
import React, { Component } from 'react';
import {
  Transition, animated, interpolate, config,
} from 'react-spring';
import cn from 'classnames';

import {
  Button, Icon, Portal, Wrapper,
} from 'components';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  on: boolean,
  toggle: () => void,
  children: string | Node,
  className?: string,
  header?: string | () => void,
  buttonTitle?: string,
  noFooter?: boolean,
};

/* eslint-disable */
export default class Modal extends Component<propTypes>{
  static defaultProps = {
    className: '',
    header: null,
    buttonTitle: 'close',
    noFooter: false,
  };

  renderHeader = (header) => {
    switch(typeof header) {
      case 'string':
        return <h4>{header}</h4>;
      case 'function':
        return header();
      default: return null;
    }
  };

  render() {
    const {
      on, toggle, children, className, header, buttonTitle, noFooter,
    } = this.props;

    const classNames = cn(
      styles.content,
      className,
      { [styles.noFooter]: noFooter },
    );

    const headerStyle = cn(
      styles.header,
      { [styles.hasContent]: header !== null },
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
              ({ o, s, y }) => (
                <animated.div
                  onClick={toggle}
                  className={styles.modal}
                  role="Dialog"
                  style={{
                    opacity: o.interpolate(o => o),
                  }}
                >
                  <animated.div
                    className={classNames}
                    onClick={e => e.stopPropagation()}
                    role="Contentinfo"
                    style={{
                      transform: interpolate(
                        [s, y],
                        (s, y) => `scale(${s}) translate3d(0, ${y}, 0)`,
                      ),
                    }}
                  >
                    <Wrapper className={headerStyle}>
                      {this.renderHeader(header)}
                      <Icon
                        name="close"
                        size="12"
                        onClick={toggle}
                        className={styles.icon}
                      />
                    </Wrapper>
                    {children}
                    {!noFooter
                      && (
                        <Wrapper className={styles.footer} direction="row">
                          <Button
                            title={buttonTitle}
                            onClick={toggle}
                            theme="secondary"
                          />
                        </Wrapper>
                      )
                    }
                  </animated.div>
                </animated.div>
              )
            )
          }
        </Transition>
      </Portal>
    );
  }
}
/* eslint-enable */
