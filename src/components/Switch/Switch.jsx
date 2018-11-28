// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({
  name, id, checked, onChange, className, dataQa, label,
}: propTypes) => {
  const labelClass = cn(styles.label, {
    [styles.active]: checked,
  });

  const classNames = cn(
    styles.switch,
    className,
  );

  /* eslint-disable jsx-a11y/label-has-for */
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.title}>
        {label}
      </label>
      <input
        className={classNames}
        type="checkbox"
        id={id}
        name={name}
        value={id}
        data-itemid={id}
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
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
  /* eslint-enable jsx-a11y/label-has-for */
};

type propTypes = {
  id: string,
  name: string,
  checked: boolean,
  onChange: SyntheticInputEvent<HTMLInputElement> => void,
  className?: string,
  dataQa?: string,
  label?: string,
};

Switch.defaultProps = {
  className: '',
  dataQa: '',
  label: '',
};

export default Switch;
