import React from 'react';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

/**
 * @visibleName Wrapper/Header/Footer
 */
const Wrapper = ({
  children, className, direction, type, style,
}:propTypes) => {
  const classNames = cn(
    className,
    styles.wrapper,
    {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
  );

  return React.createElement(
    type,
    {
      className: classNames,
      type,
      direction,
      style,
    },
    children,
  );
};

type propTypes = {
  children: string | Node | () => void,
  className?: string,
  direction?: string,
  style?: Object,
  type?: 'div' | 'header' | 'footer' | 'section',
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  style: {},
  type: 'div',
};

export default Wrapper;
