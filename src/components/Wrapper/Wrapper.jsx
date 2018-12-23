import React from 'react';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

/**
 * @visibleName Wrapper/Header/Footer
 */
const Wrapper = ({
  children, className, direction, type,
}:propTypes) => {
  const classNames = cn(
    className,
    styles.wrapper,
    {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
  );

  return React.cloneElement(
    renderType(type, children),
    {
      className: classNames,
      type,
      direction,
    },

  );
};

/* eslint-disable */
const renderType = (type, children) => (
  type === 'div'
    ? <div>{children}</div>
    : type === 'header'
      ? <header>{children}</header>
      : <footer>{children}</footer>
);
/* eslint-enable */


type propTypes = {
  children: string | Node | () => void,
  className?: string,
  direction?: string,
  type?: 'div' | 'header' | 'footer',
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  type: 'div',
};

export default Wrapper;
