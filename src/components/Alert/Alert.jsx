/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Transition, animated, config,
} from 'react-spring';
import cn from 'classnames';

import Hint from '../Hint';
import Portal from '../Portal';
import styles from './Alert.module.scss';

const Alert = ({
  on, className, toggle, theme, textAlert, timeout, position, dataQa,
}) => {
  const classNames = cn(
    styles.alert,
    {
      [styles.right]: position === 'topRight' || position === 'bottomRight',
      [styles.left]: position === 'topLeft' || position === 'bottomLeft',
      [styles.top]: position === 'topRight' || position === 'topLeft',
      [styles.bottom]: position === 'bottomRight' || position === 'bottomLeft',
    },
    className
  );

  const setTranslate = translate(position);

  if (timeout !== undefined && on) {
    timer(toggle, timeout);
  }

  return (
    <Portal>
      <Transition
        native
        items={on}
        config={config.stiff}
        from={{ transform: `translateX(${setTranslate}px)` }}
        enter={{ transform: 'translateX(0)' }}
        leave={{ transform: `translateX(${setTranslate}px)` }}
      >
        {on =>
          on &&
          (style => (
            <animated.div
              className={classNames}
              role="contentinfo"
              style={style}
              onClick={toggle}
              timer={timeout}
              position={position}
            >
              <Hint
                textAlert={textAlert}
                theme={theme}
                dataQa={dataQa}
              />
            </animated.div>
          ))
        }
      </Transition>
    </Portal>
  );
};

export const translate = value => {
  switch (value) {
    case 'topRight':
    case 'bottomRight':
      return 320;
    case 'topLeft':
    case 'bottomLeft':
      return -320;
    default:
      return 320;
  }
};

const timer = (toggle, timeout) => setTimeout(() => toggle(), timeout);

Alert.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'light', 'danger', 'menthe']),
  textAlert: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  className: PropTypes.string,
  timeout: PropTypes.number,
  position: PropTypes.oneOf([
    'topLeft',
    'bottomLeft',
    'topRight',
    'bottomRight',
  ]),
  dataQa: PropTypes.string,
};

Alert.defaultProps = {
  theme: 'default',
  className: undefined,
  timeout: undefined,
  position: 'topRight',
  toggle: null,
  dataQa: '',
};

export default Alert;
