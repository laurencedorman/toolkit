import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
const ToggleDown = ({
  on, children, className, style,
}) => {
  const classNames = cn(
    styles.toggleDown,
    className,
  );

  return (
    <Spring
      force
      config={{
        tension: 300, friction: 17, mass: 0.2, precision: 1,
      }}
      from={{ height: 0 }}
      to={{ height: on ? 'auto' : 0 }}
    >
      {customStyle => (
        <animated.div
          className={classNames}
          style={{
            ...customStyle,
            ...style,
          }}
        >
          <div>
            {children}
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

ToggleDown.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf([PropTypes.element]),
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ToggleDown.defaultProps = {
  className: '',
  style: {},
};

export default ToggleDown;
