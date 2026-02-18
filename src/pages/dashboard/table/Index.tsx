import TableHead from "@/components/TableHead";
import React from "react";

const TopSellingProductsTable = () => {
  const topSelling = [
    { name: "Hennessy", soldQuantity: 200, remainingQuantity: 10, price: "$75000" },
    { name: "Four cousins", soldQuantity: 150, remainingQuantity: 15, price: "$8500" },
    { name: "Ciroc Blue", soldQuantity: 400, remainingQuantity: 40, price: "$45,000" },
    { name: "Bacardi Vodka", soldQuantity: 450, remainingQuantity: 100, price: "$45,000" },
  ];
  return (
    <table className="text-left w-full">
      <TableHead tableHead={["name", "Sold Quantity", "Remaining Quantity", "Price"]} />
      <tbody className="text-sm">
        {topSelling.map((item) => (
          <tr
            key={item.name}
            className="*:py-3 border-b border-border-primary text-[#666666] text-sm font-medium"
          >
            <td>{item.name}</td>
            <td>{item.soldQuantity}</td>
            <td>{item.remainingQuantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopSellingProductsTable;
