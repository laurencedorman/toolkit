// @flow
import React from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Hint.module.scss';

const Hint = ({
  theme,
  textAlert,
  icon,
  iconWidth,
  className,
  dataQa,
}: PropTypes) => {
  const classNames = cn(styles.hint, styles[theme], className);

  return (
    <div className={classNames} data-qa={dataQa}>
      <div className={styles.img}>
        <Icon name={icon} size={iconWidth} />
      </div>
      <div>
        <p>{textAlert}</p>
      </div>
    </div>
  );
};

type PropTypes = {
  theme?: Array<'default', 'light', 'danger', 'menthe'>,
  textAlert: string | (() => void),
  icon?: string,
  iconWidth?: number,
  className?: string,
  dataQa?: string,
};

Hint.defaultProps = {
  theme: 'default',
  icon: 'alert-circle',
  iconWidth: 32,
  className: '',
  dataQa: '',
};

export default Hint;
