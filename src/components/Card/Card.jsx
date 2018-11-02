// @flow
import React, { type Node } from 'react';
import styles from './Card.module.scss';

const Card = ({ children }: propTypes) => (
  <div className={styles.card}>
    {children}
  </div>
);

type propTypes = {
  children: string | Node,
}

export default Card;
