import { getStatusClass, getStatusText } from "@/utils/statusLabel";
import React from "react";

interface TableDataProps {
  product: ProductProps;
}

const TableData: React.FC<TableDataProps> = ({ product }) => {
  const { productName, productPrice, productQuantity, expiringDate, availability } = product;
  return (
    <>
      <td>{productName}</td>
      <td>${Number(productPrice).toLocaleString()}</td>
      <td>{productQuantity} {`${productQuantity > 1 ? 'Cartons' : 'Carton'}`}</td>
      <td>
        {(expiringDate !== "expired" && expiringDate != "does not expire") ? (
          <p>{expiringDate}</p>
        ): (
        <p className={`${getStatusClass(expiringDate)}`}>{getStatusText(expiringDate)}</p>

        )}
      </td>
      <td>
        <p className={getStatusClass(availability)}>{getStatusText(availability)}</p>
      </td>
    </>
  );
};

export default TableData;
