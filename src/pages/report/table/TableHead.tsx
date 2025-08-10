import React from "react";

const TableHead = () => {
  return (
    <thead className="text-left border-b border-border-primary text-text-grey-700 font-medium text-sm">
      <tr className="*:py-3">
        <th>Category</th>
        <th>Turn Over</th>
        <th>Increased by</th>
      </tr>
    </thead>
  );
};

export default TableHead;
