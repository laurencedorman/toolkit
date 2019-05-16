/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';
import colors from '../../styles/colors';
import styles from './Button.module.scss';

const Button = React.forwardRef(
  (
    {
      id,
      children,
      size,
      theme,
      disabled,
      type,
      iconComponent,
      reverse,
      onClick,
      dataQa,
      className,
      style,
      title,
      fill,
    },
    ref
  ) => {
    const classNames = cn(
      styles.button,
      styles[size],
      styles[theme],
      {
        [styles.icon]: iconComponent,
        [styles.reverse]: reverse,
        [styles.onlyIcon]: !children && !title,
      },
      className
    );

    return (
      <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={classNames}
        data-qa={dataQa}
        ref={ref}
        style={style}
      >
        {iconComponent && (
          <Icon component={iconComponent} size="16" fill={fill} />
        )}
        {children && children}
        {title && title}
      </button>
    );
  }
);

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'ghost', 'reset']),
  size: PropTypes.oneOf(['big', 'default', 'small', 'xsmall']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  iconComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool,
  ]),
  reverse: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  dataQa: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fill: PropTypes.string,
};

Button.displayName = 'Button';

Button.defaultProps = {
  theme: 'default',
  size: 'default',
  type: 'button',
  reverse: false,
  disabled: false,
  dataQa: '',
  className: '',
  title: '',
  fill: colors.white,
};

export default Button;
