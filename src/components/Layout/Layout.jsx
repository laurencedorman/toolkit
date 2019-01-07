import React from 'react';
import cn from 'classnames';
import styles from './Layout.module.scss';

const Layout = ({
  children, className, styleGuidist, direction, style,
}:propTypes) => {
  const classNames = cn(
    className,
    styles.layout,
    {
      [styles.guide]: styleGuidist,
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
  children: string | Node,
  className?: string,
  direction?: 'row' | 'column',
  styleGuidist?: boolean,
  style?: Object,
};

Layout.defaultProps = {
  className: '',
  direction: 'row',
  styleGuidist: false,
  style: {},
};

export default Layout;
