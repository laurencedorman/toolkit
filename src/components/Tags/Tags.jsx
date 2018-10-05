import React from 'react';
import styles from './Tags.module.scss';

const Tags = ({ className, children, disabled }: propTypes) => {
  const isDisabled = disabled && styles.disabled;

  return(
    <span className={`${styles.tags} ${isDisabled} ${className}`}>
      {children}
    </span>
  )
};

type propTypes = {
  className?: string,
  children: ReactNode,
  disabled: boolean,
};

Tags.defaultProps = {
  className: '',
  disabled: false,
};

export default Tags;
