import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Portal from '../Portal';
import styles from './Sidebar.module.scss';

const Sidebar = ({
  on, children, className, position, width, dataQa,
}) => {
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

Sidebar.propTypes = {
  on: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left']),
  dataQa: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
  position: 'left',
  dataQa: '',
};

export default Sidebar;
