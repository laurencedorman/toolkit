// @flow
import React from 'react';
import Loader from '../Loader';
import { STATUS } from './constants';
import styles from './Status.module.scss';

const Status = ({ status, transKeepTyping, transNoResult }: Props) => {
  let content;

  switch (status) {
    case STATUS.KEEP_TYPING:
      content = transKeepTyping;
      break;
    case STATUS.LOADING:
      content = <Loader />;
      break;
    case STATUS.NO_RESULT:
      content = transNoResult;
      break;
    default:
      throw new Error('Unknown status');
  }

  return <div className={styles.status}>{content}</div>;
};

type Props = {
  status: string,
  transKeepTyping?: string,
  transNoResult?: string,
};

Status.defaultProps = {
  transKeepTyping: 'Keep typing ✍️',
  transNoResult: 'No result 😞',
};

export default Status;
