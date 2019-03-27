/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Transition, animated, interpolate,
} from 'react-spring';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import IconClose from '../Icon/Icons/IconClose';
import Portal from '../Portal';
import Wrapper from '../Wrapper';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */

/* eslint-disable */
const Modal = ({
  on,
  toggle,
  children,
  className,
  header,
  buttonTitle,
  noFooter,
  hasIframe,
  dataQa
}) => {
  const classNames = cn(
    styles.content,
    {
      [styles.noFooter]: noFooter,
      [styles.iframe]: hasIframe,
    },
    className,
  );

  const headerStyle = cn(
    styles.header,
    { [styles.hasContent]: header !== null },
  );

  return (
    <Portal>
      <Transition
        native
        config={{ tension: 350, friction: 23, mass: 0.6 }}
        items={on}
        from={{ o: 0, s: 0.75, y: '33vh' }}
        enter={{ o: 1, s: 1, y: '0' }}
        leave={{ o: 0, s: 0.75, y: '33vh' }}
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
                  <Wrapper className={headerStyle} data-qa={dataQa}>
                    {renderHeader(header)}
                    <Icon
                      component={IconClose}
                      size="12"
                      onClick={toggle}
                      className={styles.icon}
                    />
                  </Wrapper>

                  <Wrapper className={styles.body}>
                    {children}
                  </Wrapper>

                  {!noFooter &&
                    <Wrapper className={styles.footer} direction="row">
                      <Button
                        title={buttonTitle}
                        onClick={toggle}
                        theme="secondary"
                      />
                    </Wrapper>
                  }
                </animated.div>
              </animated.div>
            )
          )
        }
      </Transition>
    </Portal>
  );
};

const renderHeader = header => (
  typeof header === 'string'
    ? <h4>{header}</h4>
    : typeof header === 'function'
      ? <h4>{header()}</h4>
      : null
);
/* eslint-enable */

Modal.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf([]),
  ]),
  buttonTitle: PropTypes.string,
  noFooter: PropTypes.bool,
  hasIframe: PropTypes.bool,
  dataQa: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
  header: null,
  buttonTitle: 'close',
  noFooter: false,
  hasIframe: false,
  toggle: null,
  dataQa: '',
};

export default Modal;
