// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Image.module.scss';
import imgAssets from '../../assets/setImg';

/* eslint-disable */
const Image = ({ src, alt, className, onClick, dataQa, style }: propTypes) => {
  const classNames = cn(
    styles.container,
    className,
  );

  const withCursor = {
    cursor: onClick && 'pointer',
  };

  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onClick}
      role={onClick ? 'button' : 'image'}
      data-qa={dataQa}
      style={{
        withCursor,
        ...style,
      }}
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
  style?: Object,
};

Image.defaultProps = {
  className: '',
  style: {},
};

export default Image;
