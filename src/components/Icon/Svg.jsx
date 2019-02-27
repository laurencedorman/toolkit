// @flow
import React from 'react';
import iconAssets from '../../assets/setIcons';
import styles from './Icon.module.scss';

const Svg = ({ name, size, fill }: propTypes) => (
  Object.prototype.hasOwnProperty.call(iconAssets, name)
    && (
      <svg
        className={styles.svg}
        width={`${String(size)}px`}
        height={`${String(size)}px`}
        viewBox={iconAssets[name].viewBox}
        aria-describedby={name}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <path
          d={iconAssets[name].d}
        />
      </svg>
    )
);

type propTypes = {
  name: string,
  size?: number,
  fill?: string | () => void,
};

Svg.defaultProps = {
  size: 32,
  fill: '#0c193a',
};

export default Svg;
