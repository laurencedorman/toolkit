import React from 'react';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

const Wrapper = ({
  children, className, direction, style,
}:propTypes) => {
  const classNames = cn(
    className,
    styles.wrapper,
    {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
  );

  return (
    <div
      className={classNames}
      direction={direction}
      style={style}
    >
      {children}
    </div>
  );
};

type propTypes = {
  children: string | Node | () => void,
  className?: string,
  direction?: string,
  style?: Object,
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  style: {},
};

export default Wrapper;
