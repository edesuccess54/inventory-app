import React from "react";

interface TableDataProps {
  product: {
    id: number,
    category: string,
    turnOver: number,
    increasedBy: number
  };
}

const TableData: React.FC<TableDataProps> = ({ product }) => {
  const { category, turnOver, increasedBy } = product;
  return (
    <>
      <td>{category}</td>
      <td>${Number(turnOver).toLocaleString()}</td>
      <td><p className="text-teal-700">{increasedBy}%</p></td>
    </>
  );
};

export default TableData;
