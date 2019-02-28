// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Image.module.scss';
import imgAssets from '../../assets/setImg';

/* eslint-disable */
const Img = ({ src, alt, className, onClick, dataQa }: propTypes) => {
  const classNames = cn(
    styles.container,
    className,
  );

  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex="-1"
      role={onClick ? 'button' : 'image'}
      data-qa={dataQa}
    >
      {Object.prototype.hasOwnProperty.call(imgAssets, src)
        && (
        <img
          src={imgAssets[src]}
          alt={alt}
          className={styles.img}
        />
        )
      }
    </div>
  );
};
/* eslint-enable */

type propTypes = {
  src: string,
  alt: string,
  className?: string,
};

Img.defaultProps = {
  className: '',
};

export default Img;
