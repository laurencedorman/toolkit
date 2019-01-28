// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

const Tag = ({
  className, theme, children, disabled,
}: propTypes) => {
  const tagClass = cn(
    className,
    styles.tag,
    styles[theme],
    { [styles.disabled]: disabled },
  );

  return (
    <span className={tagClass}>
      {children}
    </span>
  );
};

type propTypes = {
  className?: string,
  theme?: 'default' | 'primary' | 'secondary' | 'reset',
  children: string | Node,
  disabled: boolean,
};

Tag.defaultProps = {
  className: '',
  theme: 'default',
};

export default Tag;
