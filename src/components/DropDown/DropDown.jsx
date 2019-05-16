/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import ChevronRight from '../Icon/Icons/IconChevronRight';
import { useMeasure } from '../GetMeasure';
import OptionContainer from './OptionContainer';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

const DropDown = ({
  title,
  on,
  toggle,
  className,
  disabled,
  icon,
  backgroundColor,
  fill,
  stroke,
  sideLeft,
  sideRight,
  options,
  right,
  active,
  onClick,
  dataQa,
}) => {
  const wrapper = cn(styles.wrapper, className);

  const iconButton = cn(styles.iconButton, { [styles.rotate]: on });
  const [size, ref] = useMeasure();

  return (
    <div className={wrapper}>
      <Button
        ref={ref}
        onClick={toggle}
        className={styles.button}
        disabled={disabled}
        style={{ backgroundColor }}
        dataQa={dataQa}
      >
        {renderTitle(title)}
        {icon && (
          <Icon
            component={ChevronRight}
            size="16"
            className={iconButton}
            fill={fill}
            stroke={stroke}
          />
        )}
      </Button>
      <OptionContainer
        on={on}
        toggle={toggle}
        size={size}
        options={options}
        right={right}
        className={className}
        onClick={onClick}
        active={active}
        sideLeft={sideLeft}
        sideRight={sideRight}
      />
    </div>
  );
};

DropDown.displayName = 'Dropdown';

const renderTitle = title =>
  typeof title === 'string'
    ? title
    : typeof title === 'function'
    ? title()
    : null;

DropDown.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  right: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.string,
  icon: PropTypes.bool,
  backgroundColor: PropTypes.string,
  sideLeft: PropTypes.bool,
  sideRight: PropTypes.bool,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  dataQa: PropTypes.string,
};

DropDown.defaultProps = {
  title: '',
  right: false,
  disabled: false,
  icon: true,
  backgroundColor: colors.balataGreen,
  className: undefined,
  sideLeft: false,
  sideRight: false,
  fill: colors.white,
  stroke: colors.white,
  dataQa: '',
};

export default DropDown;
