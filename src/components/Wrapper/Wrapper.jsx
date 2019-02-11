// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

/**
 * @visibleName Wrapper/Header/Footer
 */
const Wrapper = ({
  children, className, direction, type, style, dataQa,
}:propTypes) => {
  const classNames = cn(
    styles.wrapper,
    {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
    className,
  );

  return React.createElement(
    type,
    {
      className: classNames,
      type,
      direction,
      style,
      'data-qa': dataQa,
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
  dataQa?: string,
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  style: {},
  type: 'div',
  dataQa: '',
};

export default Wrapper;
