// @flow
import React from 'react';
import styles from './Icon.module.scss';
import { icons } from '../../assets/setIcons';

const Icon = ({ name, size, fill }: propTypes) => (
  <svg
    className={styles.svg}
    width={`${size}`}
    height={`${size}`}
    viewBox={icons[name].viewBox}
    aria-labelledby={icons[name]}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    role="img">
    <defs>
      <path d={icons[name].d} id={icons[name]} />
    </defs>
    <g>
      <use
        id={icons[name]}
        fill={fill}
        href={`#${icons[name]}`} />
    </g>
  </svg>
);

type propTypes = {
  icon: string,
  size?: number,
  fill?: 'string',
};

Icon.defaultProps = {
  size: '32',
  fill: '#0c193a',
};


export default Icon;
