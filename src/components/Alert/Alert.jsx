// @flow
import React from 'react';
import {
  Transition, animated, config,
} from 'react-spring';
import cn from 'classnames';

import { Hint, Portal } from 'components';
import styles from './Alert.module.scss';

/**
 * @visibleName Alert
 */
const Alert = ({
  on, className, toggle, theme, textAlert, icon, iconWidth, timeout, position, dataQa,
}:propTypes) => {
  const classNames = cn(
    styles.alert,
    {
      [styles.right]: position === 'topRight' || position === 'bottomRight',
      [styles.left]: position === 'topLeft' || position === 'bottomLeft',
      [styles.top]: position === 'topRight' || position === 'topLeft',
      [styles.bottom]: position === 'bottomRight' || position === 'bottomLeft',
    },
    className,
  );

  const setTranslate = translate(position);

  if (timeout !== undefined && on) {
    timer(toggle, timeout);
  }

  /* eslint-disable */
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
        {on => on
          /* eslint-enable */
          && (
            style => (
              <animated.div
                className={classNames}
                role="Contentinfo"
                style={style}
                onClick={toggle}
                timer={timeout}
                position={position}
              >
                {React.cloneElement(
                  <Hint />,
                  {
                    theme,
                    textAlert,
                    icon,
                    iconWidth,
                    'data-qa': dataQa,
                  },
                )}
              </animated.div>
            )
          )
        }
      </Transition>
    </Portal>
  );
};

export const translate = (value) => {
  switch (value) {
    case 'topRight':
    case 'bottomRight': return 320;
    case 'topLeft':
    case 'bottomLeft': return -320;
    default: return 320;
  }
};

const timer = (toggle, timeout) => setTimeout(() => (toggle()), timeout);

type propTypes = {
  on: boolean,
  toggle?: () => void,
  theme?: 'default' | 'light' | 'danger' | 'menthe',
  textAlert: string | () => void,
  icon?: string,
  iconWidth?: number,
  className?: string,
  timeout?: number,
  position?: 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight',
  dataQa?: string,
};

Alert.defaultProps = {
  theme: 'default',
  icon: 'alert-circle',
  iconWidth: 32,
  className: '',
  timeout: undefined,
  position: 'topRight',
  toggle: null,
  dataQa: '',
};

export default Alert;
