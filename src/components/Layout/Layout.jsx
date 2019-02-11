import React from 'react';
import cn from 'classnames';
import styles from './Layout.module.scss';

const Layout = ({
  children, className, styleGuidist, direction, style, dataQa,
}:propTypes) => {
  const classNames = cn(
    styles.layout,
    className,
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
      data-qa={dataQa}
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
  dataQa?: string,
};

Layout.defaultProps = {
  className: '',
  direction: 'row',
  styleGuidist: false,
  style: {},
  dataQa: '',
};

export default Layout;
