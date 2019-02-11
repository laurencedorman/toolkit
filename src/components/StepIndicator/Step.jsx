import React from 'react';
import cn from 'classnames';
import { Icon } from 'components';
import styles from './StepIndicator.module.scss';

const Step = ({
  className,
  step,
  active,
  label,
  done,
}: propTypes) => {
  const classNames = cn(
    styles.step,
    { [styles.active]: active },
    { [styles.done]: done },
    className,
  );

  const icon = cn(
    { [styles.icon]: done },
    className,
  );

  return (
    <div className={styles.container}>
      <div className={classNames}>
        {step}
        {done ? <Icon name="check" fill="#fff" className={icon} size={18} /> : null}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

type propTypes = {
  className?: string,
  step: string,
  label?: string,
  active: boolean,
  done: boolean,
}

Step.defaultProps = {
  className: '',
  label: null,
};

export default Step;
