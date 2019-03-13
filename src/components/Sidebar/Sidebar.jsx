// @flow
import React from 'react';
import cn from 'classnames';
import Portal from '../Portal';
import styles from './Sidebar.module.scss';

const Sidebar = ({
  on,
  children,
  className,
  position,
  width,
  dataQa,
}: propTypes) => {
  const classNames = cn(
    styles.sidebar,
    {
      [styles.on]: on,
      [styles.left]: position === 'left',
      [styles.right]: position === 'right',
    },
    className
  );

  return (
    <Portal>
      <div
        className={classNames}
        position={position}
        style={{ width }}
        data-qa={dataQa}
      >
        {children}
      </div>
    </Portal>
  );
};

type propTypes = {
  on: boolean,
  children: Node,
  className?: string,
  position?: 'right' | 'left',
  width: string,
  dataQa?: string,
};

Sidebar.defaultProps = {
  className: '',
  position: 'left',
  dataQa: '',
};

export default Sidebar;
