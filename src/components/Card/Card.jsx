import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, className, dataQa }) => {
  const classNames = cn(
    styles.card,
    className,
  );

  return (
    <div className={classNames} data-qa={dataQa}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  dataQa: '',
};

export default Card;
