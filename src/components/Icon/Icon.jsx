// @flow
import React from 'react';
import styles from './Icon.module.scss';

import iconAssets from '../../assets/setIcons';

/**
 * @visibleName Icon
 */
const IconComponent = ({
  onClick, className, name, size, fill,
}: propTypes) => (
  <div
    className={`${styles.container} ${String(className)}`}
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex="-1"
    role="button"
  >
    {Object.prototype.hasOwnProperty.call(iconAssets, name)
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
        <path d={iconAssets[name].d} />
      </svg>
      )}
  </div>
);

type propTypes = {
  onClick?: () => void,
  className?: string,
  name: string,
  size?: number,
  fill?: string,
};

IconComponent.defaultProps = {
  onClick: null,
  className: '',
  size: 32,
  fill: '#0c193a',
};

export default IconComponent;
