import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ className, children, disabled }: propTypes) => {
  const isDisabled = disabled ? styles.disabled : '';
  return(
    <small className={`${styles.tag} ${isDisabled} ${className}`}>
      {children}
    </small>
  )
};

type propTypes = {
  className?: string,
  children: string | ReactNode,
  disabled: boolean,
};

Tag.defaultProps = {
  className: '',
  disabled: false,
};

export default Tag;
