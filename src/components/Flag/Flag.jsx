import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import France from './Flags/France'
import styles from './Flag.module.scss';

const Flag = ({
  onClick,
  onKeyPress,
  className,
  size,
  fill,
  stroke,
  dataQa,
  component: Component,
}) => {
  const classNames = cn(
    styles.container,
    className,
  );

  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role={onClick ? 'button' : 'img'}
      data-qa={dataQa}
    >
      <svg
        className={styles.svg}
        width={`${String(size)}px`}
        height={`${String(size)}px`}
        viewBox="0 0 32 32"
        role="img"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Component />
      </svg>
    </div>
  );
};


Flag.propTypes = {
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  stroke: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  dataQa: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

Flag.defaultProps = {
  onClick: null,
  onKeyPress: null,
  className: '',
  size: 32,
  fill: '#0c193a',
  stroke: '#0c193a',
  dataQa: '',
};

export default Flag;
