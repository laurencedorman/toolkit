// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({ name, id, checked, onChange }: propTypes) => {
    const labelClass = cn(styles.label,{
      [styles.active]: checked,
    });

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
  )
};

type propTypes = {
  id: string,
  name: string,
  checked: boolean,
  onChange: SyntheticInputEvent<HTMLInputElement> => void,
};

export default Switch;
