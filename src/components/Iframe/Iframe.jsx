// @flow
import React from 'react';
import styles from './Iframe.module.scss';

const Iframe = ({
  id, src, title, dataQa,
}:propTypes) => (
  <div className={styles.container} data-qa={dataQa}>
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
  dataQa?: string,
}

Iframe.defaultProps = { dataQa: '' };

export default Iframe;
