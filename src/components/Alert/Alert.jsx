// @flow
import React from 'react';
import {
  Transition, animated, config,
} from 'react-spring';
import cn from 'classnames';

import { Button, Hint, Portal } from 'components';
import styles from './Alert.module.scss';

/**
 * @visibleName Alert
 */
const Alert = ({
  on, className, toggle, ...rest
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
              >
                {React.cloneElement(
                  <Hint />,
                  { ...rest },
                )}
                <Button onClick={toggle} />
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
};

export default Alert;
