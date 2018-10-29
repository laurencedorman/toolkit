import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children }: propTypes) => (
  <div className={styles.card}>
    {children}
  </div>
);

type propTypes = {
  children: React.Node,
};

export default Card;
