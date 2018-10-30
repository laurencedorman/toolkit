// @flow
import React from 'react';
import styles from './Card.scss';

const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
);

export default Card;
