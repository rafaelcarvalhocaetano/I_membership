import React from 'react';

import './table-header.scss';

const TableHeader = () => {
  const table_header = ['Owner', 'End date', 'Profits', 'Losses', 'Phone'];
  return (
    <thead className="tbl-header">
      <tr className="line-header">
        {
          table_header.map((x: string, i: number) => {
            return(<th className="title" key={i}>{x}</th>)
          })
        }
      </tr>
    </thead>
  )
}

export default TableHeader;