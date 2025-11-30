import React from 'react'
import { purchasedProducts } from './mock/purchasedProducts';
import TableData from './TableData';

const PurchaseTable = () => {

  return (
    <table className="w-full">
      <thead className="text-left border-b border-border-primary text-text-grey-500 font-medium text-sm">
        <tr className="*:py-3">
          <th>Purchase ID</th>
          <th>Date</th>
          <th>Supplier Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {["1", "2"].length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center text-text-grey font-medium text-sm py-3">
              No product available
            </td>
          </tr>
        ) : (
          purchasedProducts?.map((product) => (
            <tr
              key={product.id}
              className="lg:border-b last:border-b-0 border-border-primary *:py-3 text-text-grey-700 font-medium text-sm cursor-pointer"
            >
              <TableData product={product} />
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default PurchaseTable