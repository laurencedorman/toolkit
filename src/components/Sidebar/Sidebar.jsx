import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.scss';

const Sidebar = ({
  on, children, className, position, width,
}: propTypes) => {
  const classNames = cn(
    className,
    styles.sidebar,
    {
      [styles.on]: on,
      [styles.left]: position === 'left',
      [styles.right]: position === 'right',
    },
  );

  return (
    <div
      className={classNames}
      position={position}
      style={{
        width: `${width}`,
      }}
    >
      {children}
    </div>
  );
};

type propTypes = {
  on: boolean,
  children: Node,
  className?: string,
  position?: 'right' | 'left',
  width: string,
};

Sidebar.defaultProps = {
  className: '',
  position: 'left',
};

export default Sidebar;
