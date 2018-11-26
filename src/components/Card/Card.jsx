// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, className }: propTypes) => {
  const classNames = cn(
    styles.card,
    className,
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

type propTypes = {
  children: string | Node,
  className?: string,
}

Card.defaultProps = {
  className: '',
};

export default Card;
