/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import cn from 'classnames';
import StepIndicator from '../StepIndicator';
import Wrapper from '../Wrapper';
import styles from './Stepper.module.scss';


export default class Stepper extends PureComponent {
  static defaultProps = {
    className: '',
    activeStep: 0,
    getLength: () => null,
  };

  componentDidMount() {
    this.ismounted = true;
    const { getLength, children } = this.props;
    if (this.ismounted) {
      getLength(React.Children.count(children));
    }
  }

  componentDidUpdate(prevProps) {
    const { getLength, children } = this.props;
    if (React.Children.count(prevProps.children) !== React.Children.count(children)) {
      getLength(React.Children.count(children));
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
  }

  render() {
    const {
      children, className, activeStep, direction,
    } = this.props;

    const classNames = cn(
      styles.stepper,
      className,
    );

    const up = direction === 'up';

    return (
      <Wrapper className={classNames}>
        <StepIndicator activeStep={activeStep}>
          {children}
        </StepIndicator>

        <div className={styles.bodyStepper}>
          {bodyStepper(children, activeStep, up)}
        </div>
      </Wrapper>
    );
  }
}

/* eslint-disable  */
const bodyStepper = (children, activeStep, up) => {
  if (React.Children.count(children) === 1) return children;

  return (
    <Transition
      native
      unique
      reset
      config={{
        tension: 280, friction: 15, mass: 0.2, precision: 1,
      }}
      items={activeStep}
      from={{ t: up ? 100 : -100 }}
      enter={{ t: 0 }}
      leave={{ t: up ? -100 : 100 }}
    >
      {activeStep => ({ t }) => (
        <>
          <animated.div
            className={styles.container}
            style={{
              transform: t.interpolate(t => `translate(${t}%, 0)`),
            }}
          >
            {children[activeStep]}
          </animated.div>
        </>
      )}
    </Transition>
  );
};

Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
    PropTypes.arrayOf([
      PropTypes.element,
      PropTypes.elementType,
      PropTypes.node,
    ]),
  ]),
  activeStep: PropTypes.number,
  getLength: PropTypes.func,
  direction: PropTypes.oneOf(['up', 'down']),
};
/* eslint-enable  */
