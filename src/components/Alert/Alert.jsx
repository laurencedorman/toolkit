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
  on, className, toggle, theme, textAlert, icon, iconWidth,
}:propTypes) => {
  const classNames = cn(
    styles.alert,
    className,
  );
  /* eslint-disable */
  return (
    <Portal>
      <Transition
        native
        items={on}
        config={config.stiff}
        from={{ transform: 'translateX(420px)' }}
        enter={{ transform: 'translateX(0px)' }}
        leave={{ transform: 'translateX(420px)' }}
      >
        {on => on
          && (
            style => (
              <animated.div
                className={classNames}
                role="Contentinfo"
                style={style}
                onClick={toggle}
              >
                {React.cloneElement(
                  <Hint />,
                  {
                    theme,
                    textAlert,
                    icon,
                    iconWidth,
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
/* eslint-enable */

type propTypes = {
  on: boolean,
  toggle: () => void,
  theme?: Array<'default', 'light', 'danger', 'menthe'>,
  textAlert: string | () => void,
  icon?: string,
  iconWidth?: number,
  className?: string,
};

Alert.defaultProps = {
  theme: 'default',
  icon: 'alert-circle',
  iconWidth: 32,
  className: '',
};

export default Alert;
