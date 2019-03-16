import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Hint.module.scss';

const Hint = ({
  theme, textAlert, icon, iconWidth, className, dataQa,
}) => {
  const classNames = cn(
    styles.hint,
    styles[theme],
    className,
  );

  return (
    <div className={classNames} data-qa={dataQa}>
      <div className={styles.img}>
        <Icon name={icon} size={iconWidth} />
      </div>
      <div>
        <p>{textAlert}</p>
      </div>
    </div>
  );
};

Hint.propTypes = {
  theme: PropTypes.oneOf([
    'default',
    'light',
    'danger',
    'menthe',
  ]),
  textAlert: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.any,
  ]).isRequired,
  icon: PropTypes.string,
  iconWidth: PropTypes.number,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Hint.defaultProps = {
  theme: 'default',
  icon: 'alert-circle',
  iconWidth: 32,
  className: '',
  dataQa: '',
};

export default Hint;
