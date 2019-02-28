// @flow
import React from 'react';
import cn from 'classnames';

import iconAssets from '../../assets/setIcons';
import styles from './Icon.module.scss';

/**
 * @visibleName Icon
 */

/* eslint-disable */
const IconComponent = ({
  onClick, className, name, size, fill, dataQa,
}: propTypes) => {
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
};

/* eslint-enable */

type propTypes = {
  onClick?: () => void,
  className?: string,
  name: string,
  size?: number,
  fill?: string | () => void,
  dataQa?: string,
};

IconComponent.defaultProps = {
  onClick: null,
  className: '',
  size: 32,
  fill: '#0c193a',
  dataQa: '',
};

export default IconComponent;
