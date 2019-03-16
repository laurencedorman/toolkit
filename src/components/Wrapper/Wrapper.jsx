import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

/**
 * @visibleName Wrapper/Header/Footer
 */
const Wrapper = ({
  children, className, direction, type, style, dataQa,
}) => {
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

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
  className: PropTypes.string,
  direction: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf([
    'div',
    'header',
    'footer',
    'section',
  ]),
  dataQa: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  style: {},
  type: 'div',
  dataQa: '',
};

export default Wrapper;
