// @flow
import React from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';
import { GetMeasure } from 'components';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
const ToggleDown = ({
  on, children, className, style,
}:propTypes) => {
  const classNames = cn(
    styles.toggleDown,
    className,
  );

  return (
    <GetMeasure>
      {({ size, ref }) => (
        <Spring
          force
          config={{
            tension: 280, friction: 15, mass: 0.2, precision: 1,
          }}
          from={{ height: 0 }}
          to={{ height: on ? size.height : 0 }}
        >
          {customStyle => (
            <animated.div
              className={classNames}
              style={{
                ...customStyle,
                ...style,
              }}
            >
              <div ref={ref}>
                {children}
              </div>
            </animated.div>
          )}
        </Spring>
      )}
    </GetMeasure>
  );
};

type propTypes = {
  on: boolean,
  children: string | Node,
  className?: string,
  style?: Object,
};

ToggleDown.defaultProps = {
  className: '',
  style: {},
};

export default ToggleDown;
