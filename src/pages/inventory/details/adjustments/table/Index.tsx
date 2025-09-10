import React from 'react'
import TableHead from './TableHead';
import { purchasedProducts } from '../../purchases/Table/mock/purchasedProducts';
import TableData from './TableData';

const AdjustmentTable = () => {
  return (
    <>
      <table className='w-full'>
        <TableHead />

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
                className="lg:border-b last:border-b-0 border-border-primary *:py-3 text-text-grey font-medium text-sm cursor-pointer"
              >
                <TableData product={product} />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default AdjustmentTable