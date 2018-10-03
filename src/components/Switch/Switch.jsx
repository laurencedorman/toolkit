import React from 'react';
import styles from './Switch.module.scss';

const Switch = ({ name, id, checked, onChange }: propTypes) => {
  const isChecked = checked && styles.active;

  return (
    <div>
      <label
        htmlFor={id}
        className={`${styles.label} ${isChecked}`}
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
  )
};

type propTypes = {
  id: string,
  name: string,
  checked: boolean,
  onChange: () => {},
};

export default Switch;
