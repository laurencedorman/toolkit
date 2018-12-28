// @flow
import React from 'react';
import styles from './Iframe.module.scss';

const Iframe = ({ id, src, title }:propTypes) => (
  <div className={styles.container}>
    <iframe
      id={id}
      title={title}
      className={styles.iframe}
      src={src}
      frameBorder="0"
    />
  </div>
);

type propTypes = {
  id: string,
  src: string,
  title: string,
}

export default Iframe;
