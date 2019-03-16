import React from 'react';
import PropTypes from 'prop-types';
import styles from './Iframe.module.scss';

const Iframe = ({
  id, src, title, dataQa,
}) => (
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

Iframe.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataQa: PropTypes.string,
};

Iframe.defaultProps = { dataQa: '' };

export default Iframe;
