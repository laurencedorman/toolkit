// @flow
import React from 'react';
import styles from './Icon.module.scss';
import icons from '../../assets/setIcons';

const Icon = ({ onClick, className, name, size, fill }: propTypes) => (
  <div className={`${styles.container} ${className}`} onClick={onClick}>
    {icons.hasOwnProperty(name) &&
    <svg
      className={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={icons[name].viewBox}
      aria-describedby={name}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      role="img">
      <path d={icons[name].d} />
    </svg>
    }
  </div>
);

type propTypes = {
  onClick?: () => void,
  className?: string,
  name: string,
  size?: number,
  fill?: string,
};

Icon.defaultProps = {
  onClick: null,
  className: '',
  size: 32,
  fill: '#0c193a',
};

export default Icon;
