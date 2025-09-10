import React from 'react'

interface TableDataProps {
  product: PurchasedProductProps;
}

const TableData:React.FC<TableDataProps> = ({product}) => {
  return (
    <>
      <td>{product.purchasedId}</td>
      <td>{product.date}</td>
      <td>{product.supplierName}</td>
      <td>{product.quantity}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>${(product.quantity * product.price).toFixed(2)}</td>
    </>
  )
}

export default TableData