/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import iconAssets from '../../assets/setIcons';
import styles from './Icon.module.scss';

/**
 * @visibleName Icon
 */

/* eslint-disable */
const IconComponent = ({
  onClick, className, name, size, fill, stroke, dataQa,
}) => {
  const classNames = cn(
    styles.container,
    className,
  );

  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onClick}
      role={onClick ? 'button' : 'image'}
      data-qa={dataQa}
    >
      {Object.prototype.hasOwnProperty.call(iconAssets, name) && (
        <svg
          className={styles.svg}
          width={`${String(size)}px`}
          height={`${String(size)}px`}
          viewBox="0 0 32 32"
          aria-describedby={name}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          {name.includes('chevron')
            ? <g fill="none">
                <path
                  stroke={stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={iconAssets[name]}
                />
              </g>
            : <path d={iconAssets[name]} />
          }
        </svg>
      )}
    </div>
  );
};

/* eslint-enable */
IconComponent.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  stroke: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  dataQa: PropTypes.string,
};

IconComponent.defaultProps = {
  onClick: null,
  className: '',
  size: 32,
  fill: '#0c193a',
  stroke: '#0c193a',
  dataQa: '',
};

export default IconComponent;
