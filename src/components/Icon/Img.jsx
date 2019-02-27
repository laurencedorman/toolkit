// @flow
import React from 'react';
import styles from './Icon.module.scss';

const Img = ({ src, alt }: propTypes) => (
  <img
    src={src}
    alt={alt}
    className={styles.img}
  />
);

type propTypes = {
  src: string,
  alt: string,
};

export default Img;
