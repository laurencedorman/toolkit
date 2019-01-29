// @flow
import React from 'react';
import cn from 'classnames';
import { Step } from 'components';
import styles from './StepIndicator.module.scss';


const StepIndicator = ({ children, className, activeStep }: propTypes) => {
  const classNames = cn(
    styles.stepIndicatorContainer,
    className,
  );

  return (
    <div className={classNames}>
      <div className={styles.content}>
        <div className={styles.line} />
        {React.Children.map(children, (child, index) => {
          const { step, label, done } = child.props;
          return (
            <Step
              key={step.toString()}
              step={step}
              label={label}
              active={activeStep === index}
              done={done}
            />
          );
        })}
      </div>
    </div>
  );
};

type propTypes = {
  className?: string,
  children: Array<Node>,
  activeStep: number,
}

StepIndicator.defaultProps = { className: '' };

export default StepIndicator;
