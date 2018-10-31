// @flow
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children }: propTypes) => (
  <div className={styles.card}>
    {children}
  </div>
);

type propTypes = {
  children: Node,
}

export default Card;
