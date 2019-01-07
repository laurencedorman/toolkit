// @flow
import React from 'react';
import ReactTable from 'react-table';
import cn from 'classnames';
import defaultStyles from 'react-table/react-table.css';
import styles from './Table.module.scss';

const Table = ({
  className, columns, data, defaultPageSize, loading,
}: propTypes) => {
  const classNames = cn(
    styles.table,
    defaultStyles,
    className,
    '-striped',
    '-highlight',
  );

  return (
    <ReactTable
      className={classNames}
      columns={columns}
      data={data}
      defaultPageSize={defaultPageSize}
      loading={loading}
    />
  );
};

type propTypes = {
  className?: string,
  columns: Array,
  data?: Array,
  defaultPageSize?: number,
  loading?: bool,
}

Table.defaultProps = {
  className: '',
  data: [],
  defaultPageSize: 10,
  loading: false,
};

export default Table;
