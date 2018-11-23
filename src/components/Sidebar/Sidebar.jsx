import React from 'react';
import {
  Transition, animated, config,
} from 'react-spring';
import cn from 'classnames';
import { Portal } from 'components';
import styles from './Sidebar.module.scss';

/* eslint-disable */
const Sidebar = ({
  on, children, className, position, width,
}: propTypes) => {
  const classNames = cn(
    className,
    styles.sidebar,
    {},
  );

  return (
    <Portal>
      <Transition
        native
        config={config.stiff}
        items={on}
        from={{ x: position === 'right' ? width : -width }}
        enter={{ x: 0 }}
        leave={{ x: position === 'right' ? width : -width }}
      >
        {on => on
          && (
            (({ x }) => (
              <animated.div
                className={classNames}
                position={position}
                width={width}
                style={{
                  width: `${width}px`,
                  left: position === 'left' ? 0 : 'initial',
                  right: position === 'right' ? 0 : 'initial',
                  transform: x.interpolate(x => `translateX(${x}px)`),
                }}
              >
                {children}
              </animated.div>
            ))
          )
        }
      </Transition>
    </Portal>
  );
};

type propTypes = {
  on: boolean,
  children: Node,
  className?: string,
  position?: 'right' | 'left',
  width: number,
};

Sidebar.defaultProps = {
  className: '',
  position: 'right',
};

export default Sidebar;
