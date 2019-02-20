// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';

import {
  Button, GetMeasure, Icon, OptionContainer,
} from 'components';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
type propTypes = {
  title: string | Node | () => void,
  options: Array,
  right?: boolean,
  on: boolean,
  toggle?: () => void,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  active?: string,
  icon?: boolean,
  backgroundColor?: string,
  sideLeft?: boolean,
  sideRight?: boolean,
  fill?: string,
};

/* eslint-disable */
export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
    right: false,
    disabled: false,
    active: null,
    icon: true,
    backgroundColor: colors.balataGreen,
    className: '',
    sideLeft: false,
    sideRight: false,
    toggle: null,
    fill: colors.white,
  };

  renderTitle = title => (
    typeof title === 'string'
      ? title
      : typeof title === 'function'
        ? title()
        : null
  );

  render() {
    const {
      title,
      on,
      toggle,
      className,
      disabled,
      icon,
      backgroundColor,
      fill,
      sideLeft,
      sideRight,
      options,
      right,
      active,
      onClick,
    } = this.props;

    const wrapper = cn(
      styles.wrapper,
      className,
    );

    const iconButton = cn(
      styles.iconButton,
      { [styles.rotate]: on },
    );

    return (
      <GetMeasure>
        {({ size, ref }) => (
          <div className={wrapper}>
            {on && <div className={styles.closeTarget} onClick={toggle} />}
            <Spring
              force
              native
              config={{
                tension: 280, friction: 15, mass: 0.2, precision: 1,
              }}
              from={{ w: size.width }}
              to={{ w: 'auto' }}
            >
              {({ w }) => (
                <animated.div
                  className={styles.animated}
                  style={{
                    width: w.interpolate(w => w),
                    backgroundColor,
                  }}
                >
                  <Button
                    ref={ref}
                    onClick={toggle}
                    className={styles.button}
                    disabled={disabled}
                  >
                    {this.renderTitle(title)}
                    {icon && (
                      <Icon
                        name="chevron-right"
                        size="10"
                        className={iconButton}
                        fill={fill}
                      />
                    )}
                  </Button>
                </animated.div>
              )}
            </Spring>
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
        )}
      </GetMeasure>
    );
  }
}
/* eslint-enable */
