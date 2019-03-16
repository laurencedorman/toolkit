import React from 'react';
import PropTypes from 'prop-types';
import { animated, Spring } from 'react-spring';
import GetMeasure from '../GetMeasure';
import styles from './HeightTransition.module.scss';

const HeightTransition = ({ children }) => (
  <GetMeasure>
    {({ size, ref }) => (
      <Spring
        native
        force
        config={{
          tension: 280,
          friction: 15,
          mass: 0.2,
          precision: 1,
        }}
        from={{ height: size.height }}
        to={{ height: 'auto' }}
      >
        {style => (
          <animated.div style={style} className={styles.wrapper}>
            <div ref={ref}>{children}</div>
          </animated.div>
        )}
      </Spring>
    )}
  </GetMeasure>
);

HeightTransition.propTypes = { children: PropTypes.element.isRequired };

export default HeightTransition;
