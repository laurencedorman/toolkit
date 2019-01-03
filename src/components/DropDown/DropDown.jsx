// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';

import {
  Button, GetMeasure, Icon,
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
  };

  renderOptions = (on, toggle, size) => {
    const {
      options, right, className, onClick, active, sideLeft, sideRight,
    } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
        [styles.sideLeft]: sideLeft,
        [styles.sideRight]: sideRight,
      },
    );

    const itemOption = item => cn(
      className,
      { [styles.disabled]: item.disabled },
      { [styles.active]: (item.value || item.id) === active },
    );

    const setPosition = {
      top: !sideLeft && !sideRight && `${size.height + 8}px`,
      right: sideLeft && !sideRight && `${size.width + 8}px`,
      left: sideRight && `${size.width + 8}px`,
    };

    return (
      <div
        className={container}
        style={setPosition}
      >
        <ul className={styles.list}>
          {options.map((item, index) => {
            const key = item.id ? item.id.toString() : index;
            return (
              <li
                key={key}
                className={itemOption(item)}
                data-id={item.id}
                data-value={item.value}
                disabled={item.disabled}
                onClick={!item.disabled ? onClick : null}
              >
                <span
                  onClick={!item.disabled ? toggle : null}
                  key={key}
                >
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
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
      title, on, toggle, className, disabled, icon, backgroundColor,
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
            {on
            && <div className={styles.closeTarget} onClick={toggle} />}
            <Spring
              force
              native
              config={{ tension: 290, friction: 20, mass: 0.2 }}
              from={{ w: size.width }}
              to={{ w: 'auto' }}
            >
              {({ w }) => (
                <animated.div
                  className={styles.animated}
                  style={{
                    backgroundColor,
                    width: w.interpolate(w => w),
<<<<<<< HEAD
                    backgroundColor,
=======
>>>>>>> Up coverage test
                  }}
                >
                  <Button
                    ref={ref}
                    onClick={toggle}
                    className={styles.button}
                    disabled={disabled}
                  >
                    {this.renderTitle(title)}
                    {icon
                      && (
                        <Icon
                          name="chevron-left"
                          size="10"
                          className={iconButton}
                        />
                      )
                    }
                  </Button>
                </animated.div>
              )}
            </Spring>
            {this.renderOptions(on, toggle, size)}
          </div>
        )}
      </GetMeasure>
    );
  }
}
/* eslint-enable */
