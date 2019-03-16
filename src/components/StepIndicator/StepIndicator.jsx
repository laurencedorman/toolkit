import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Step from './Step';
import styles from './StepIndicator.module.scss';

const StepIndicator = ({
  children, className, activeStep, lastStep,
}) => {
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
              done={activeStep > index || lastStep || done}
            />
          );
        })}
      </div>
    </div>
  );
};

StepIndicator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
  activeStep: PropTypes.number,
  lastStep: PropTypes.number,
};

StepIndicator.defaultProps = {
  className: '',
  lastStep: undefined,
};

export default StepIndicator;
