import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ToggleDown from '../ToggleDown';
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
}) => {
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

OptionContainer.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  right: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.string,
  sideLeft: PropTypes.bool,
  sideRight: PropTypes.bool,
};

OptionContainer.defaultProps = {
  toggle: null,
  onClick: null,
  right: false,
  className: '',
  disabled: false,
  active: '',
  sideLeft: false,
  sideRight: false,
};

export default OptionContainer;
