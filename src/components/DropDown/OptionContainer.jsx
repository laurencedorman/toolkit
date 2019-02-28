// @flow
import React from 'react';
import cn from 'classnames';
import { ToggleDown } from 'components';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
const OptionContainer = ({
  on,
  toggle,
  size,
  options,
  right,
  className,
  onClick,
  active,
  sideLeft,
  sideRight,
}:propTypes) => {
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

  const space = 8;

  const setPosition = {
    top: !sideLeft && !sideRight && `${size.height + space}px`,
    right: sideLeft && !sideRight && `${size.width + space}px`,
    left: sideRight && `${size.width + space}px`,
  };

  return (
    <>

      {on
        /* eslint-disable */
        && <div className={styles.closeTarget} onClick={toggle} />
        /* eslint-enable */
      }
      <ToggleDown
        on={on}
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
                onKeyPress={null}
              >
                <span
                  onClick={!item.disabled ? toggle : null}
                  onKeyPress={null}
                  key={key}
                >
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </ToggleDown>
    </>
  );
};

type propTypes = {
  on: boolean,
  toggle?: () => void,
  options: Array,
  right?: boolean,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  active?: string,
  sideLeft?: boolean,
  sideRight?: boolean,
};

OptionContainer.defaultProps = {
  toggle: null,
  right: false,
  className: '',
  disabled: false,
  active: '',
  sideLeft: false,
  sideRight: false,
};

export default OptionContainer;
