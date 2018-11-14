// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({
  name, id, checked, onChange,
}: propTypes) => {
  const labelClass = cn(styles.label, {
    [styles.active]: checked,
  });

  /* eslint-disable jsx-a11y/label-has-for */
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div>
      <label
        htmlFor={id}
        className={labelClass}
      />
      <input
        className={styles.switch}
        type="checkbox"
        id={id}
        name={name}
        value={id}
        checked={checked}
        onChange={onChange}
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
};

export default Switch;
