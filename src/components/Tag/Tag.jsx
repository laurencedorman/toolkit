// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

const Tag = ({
  className, theme, children, disabled, dataQa,
}: propTypes) => {
  const tagClass = cn(
    styles.tag,
    styles[theme],
    { [styles.disabled]: disabled },
    className,
  );

  return (
    <span className={tagClass} data-qa={dataQa}>
      {children}
    </span>
  );
};

type propTypes = {
  className?: string,
  theme?:
    'default' | 'primary' | 'secondary' | 'reset' | 'balata' | 'bellanotte' | 'playa' | 'artic' | 'hellblau' | 'purplerain' | 'kaktus',
  children: string | Node,
  disabled: boolean,
  dataQa?: string,
};

Tag.defaultProps = {
  className: '',
  theme: 'default',
  dataQa: '',
};

export default Tag;
