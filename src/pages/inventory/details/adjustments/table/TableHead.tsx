import React from 'react'

const TableHead = () => {
  return (
    <thead className="text-left border-b border-border-primary text-text-grey-500 font-medium text-sm">
      <tr className="*:py-3">
        <th>Adjustment ID</th>
        <th>Date</th>
        <th>Type</th>
        <th>Quantity</th>
        <th>Reason</th>
        <th>Adjusted By</th>
      </tr>
    </thead>
  );
}

export default TableHead