// @flow
import React from 'react';
import styles from './Iframe.module.scss';

const Iframe = ({ id, source, title }:propTypes) => (
  <div className={styles.container}>
    <iframe
      id={id}
      title={title}
      className={styles.iframe}
      src={source}
      frameBorder="0"
    />
  </div>
);

type propTypes = {
  id: string,
  source: string,
  title: string,
}

export default Iframe;
