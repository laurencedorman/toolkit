// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';

import {
  Button, GetMeasure, Icon, Portal,
} from 'components';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
type propTypes = {
  title: string | Node,
  options: Array,
  right?: boolean,
  on: boolean,
  toggle: () => void,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  active?: string,
  icon?: boolean,
  backgroundColor?: string,
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
  };

  renderOptions = (on, toggle, size) => {
    const {
      options, right, className, onClick, active,
    } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
      },
    );

    const itemOption = item => cn(
      className,
      { [styles.disabled]: item.disabled },
      { [styles.active]: (item.value || item.id) === active },
    );

    const setPosition = {
      top: size.bottom,
      left: !right && `${size.left}px`,
      right: right && `${window.innerWidth - size.right}px`,
    };

    return (
      <Portal>
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
                    {item.value && item.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Portal>
    );
  };

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
                    {title}
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
