import React from 'react';
import styles from './Card.module.scss';

type propTypes = {
  children?: React.Node,
};

const Card = ({ children }: propTypes) => (
  <div className={styles.card}>
    {children}
  </div>
);

export default Card;
