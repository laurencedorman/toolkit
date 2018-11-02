// @flow
import React from 'react';
import styles from './Icon.module.scss';
import icons from '../../assets/setIcons';

const Icon = ({ name, size, fill }: propTypes) => (
  <svg
    className={styles.svg}
    width={`${size}px`}
    height={`${size}px`}
    viewBox={icons[name].viewBox}
    aria-labelledby={icons[name]}
    xmlns="http://www.w3.org/2000/svg"
    role="img">
    <path
      d={icons[name].d}
      fill={fill} />
  </svg>
);

type propTypes = {
  name: string,
  size?: number,
  fill?: string,
};

Icon.defaultProps = {
  size: 32,
  fill: '#0c193a',
};

export default Icon;
