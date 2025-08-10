import React from "react";

const TableHead = () => {
  return (
    <thead className="text-left border-b border-border-primary text-text-grey-700 font-medium text-sm">
      <tr className="*:py-3">
        <th>Products</th>
        <th>Purchase price</th>
        <th>Quantity</th>
        {/* <th>Threshold Value</th> */}
        <th>Expiring Date</th>
        <th>Availability</th>
      </tr>
    </thead>
  );
};

export default TableHead;
