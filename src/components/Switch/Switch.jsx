import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({
  name, id, checked, onChange, className, dataQa, label, reset, itemId,
}) => {
  const container = cn(
    styles.container,
    { [styles.reset]: reset },
    className,
  );

  const labelClass = cn(styles.label, {
    [styles.active]: checked,
  });

  /* eslint-disable jsx-a11y/label-has-for */
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div
      className={container}
      reset={reset ? 1 : 0}
    >
      <input
        className={styles.switch}
        type="checkbox"
        id={id}
        name={name}
        value={id}
        data-itemid={itemId}
        checked={checked}
        onChange={onChange}
        data-qa={dataQa}
        aria-checked={checked}
        aria-describedby={id}
      />
      <label
        htmlFor={id}
        className={labelClass}
      />
      {label
        && <label htmlFor={id} className={styles.title}>{label}</label>}
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
  /* eslint-enable jsx-a11y/label-has-for */
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  itemId: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  dataQa: PropTypes.string,
  label: PropTypes.string,
  reset: PropTypes.bool,
};

Switch.defaultProps = {
  itemId: '',
  className: '',
  dataQa: '',
  label: '',
  reset: false,
};

export default Switch;
