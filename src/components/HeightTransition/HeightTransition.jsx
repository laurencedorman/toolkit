// @flow
import React from 'react';
import { animated, Spring } from 'react-spring';
import { GetMeasure } from 'components';
import styles from './HeightTransition.module.scss';

type propTypes = { children: Node }

const HeightTransition = ({ children }:propTypes) => (
  <GetMeasure>
    {({ size, ref }) => (
      <Spring
        native
        force
        config={{
          tension: 280, friction: 15, mass: 0.2, precision: 1,
        }}
        from={{ height: size.height }}
        to={{ height: 'auto' }}
      >
        {style => (
          <animated.div style={style} className={styles.wrapper}>
            <div ref={ref}>
              {children}
            </div>
          </animated.div>
        )}
      </Spring>
    )}
  </GetMeasure>
);

export default HeightTransition;
