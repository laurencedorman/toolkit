// @flow
import React from 'react';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({
  name, id, checked, onChange, className, dataQa,
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
    <div>
      <label
        htmlFor={id}
        className={labelClass}
      />
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
};

Switch.defaultProps = {
  className: '',
  dataQa: '',
};

export default Switch;
