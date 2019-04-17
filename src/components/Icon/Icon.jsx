/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Icon.module.scss';


const Icon = ({
  onClick,
  onKeyPress,
  className,
  name,
  size,
  fill,
  stroke,
  dataQa,
  component: Component,
}) => {
  const classNames = cn(
    styles.container,
    className,
  );

  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role={onClick ? 'button' : 'img'}
      data-qa={dataQa}
    >
      <svg
        className={styles.svg}
        width={`${String(size)}px`}
        height={`${String(size)}px`}
        viewBox="0 0 32 32"
        role="img"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Component && <Component />}
      </svg>
    </div>
  );
};


Icon.propTypes = {
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
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
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

Icon.defaultProps = {
  onClick: null,
  onKeyPress: null,
  className: undefined,
  size: 32,
  fill: '#0c193a',
  stroke: '#0c193a',
  dataQa: '',
};

export default Icon;
