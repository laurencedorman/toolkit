import React from 'react';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

const Wrapper = ({
  children, className, direction,
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
    >
      {children}
    </div>
  );
};

type propTypes = {
  children: string | Node | () => void,
  className?: string,
  direction?: string,
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
};

export default Wrapper;
