// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, className, dataQa }: propTypes) => {
  const classNames = cn(
    styles.card,
    className,
  );

  return (
    <div className={classNames} data-qa={dataQa}>
      {children}
    </div>
  );
};

type propTypes = {
  children: string | Node,
  className?: string,
  dataQa?: string,
}

Card.defaultProps = {
  className: '',
  dataQa: '',
};

export default Card;
