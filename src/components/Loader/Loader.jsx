// @flow
import React from 'react';
import styles from './Loader.module.scss';

const bar = [
  {
    x: '0',
    begin: '0s',
  },
  {
    x: '10',
    begin: '0.16s',
  },
  {
    x: '20',
    begin: '0.32s',
  },
];

const Loader = ({ fill, dataQa }: propTypes) => (
  <div
    className={styles.loader}
    role="alert"
    aria-busy="true"
    data-qa={dataQa}
  >
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
    >
      {bar.map(child => (
        <rect
          key={child.begin}
          x={child.x}
          y="13"
          width="4"
          height="5"
          fill={fill}
          rx="2"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            values="5; 21; 5"
            begin={child.begin}
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin={child.begin}
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  </div>
);

type propTypes = {
  fill?: string,
  dataQa?: string,
}

Loader.defaultProps = {
  fill: '#0c193a',
  dataQa: '',
};

export default Loader;
