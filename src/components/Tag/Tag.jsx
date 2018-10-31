// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

const Tag = ({ className, children, disabled }: propTypes) => {
  const tagClass = cn(styles.tag, {
    className,
    [styles.disabled]: disabled,
  });

  return(
    <small className={tagClass}>
      {children}
    </small>
  )
};

type propTypes = {
  className?: string,
  children: string | Node,
  disabled: boolean,
};

Tag.defaultProps = {
  className: '',
  disabled: false,
};

export default Tag;
