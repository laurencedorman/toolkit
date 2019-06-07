/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import IconCheck from '../Icon/Icons/IconCheck';
import styles from './StepIndicator.module.scss';

const Step = ({ className, step, active, label, done }) => {
  const classNames = cn(
    'toolkit',
    styles.step,
    { [styles.active]: active },
    { [styles.done]: done },
    className
  );

  const icon = cn({ [styles.icon]: done }, className);

  return (
    <div className={styles.container}>
      <div className={classNames}>
        {step}
        {done ? (
          <Icon component={IconCheck} fill="#fff" className={icon} size={18} />
        ) : null}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

Step.displayName = 'Step';

Step.propTypes = {
  className: PropTypes.string,
  step: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  done: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

Step.defaultProps = {
  className: '',
  active: false,
};

export default Step;
