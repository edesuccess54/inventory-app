"use client"

import React, { useMemo } from "react";
import TableHead from "./TableHead";
import TableData from "./TableData";
import { Button } from "@/components/buttons";
import { useInventorySlice } from "@/redux/inventory/inventory.slice";
import { useRouter } from "next/navigation";


const InventoryTable = () => {
  const {filter, products} = useInventorySlice();
  const router = useRouter()

  const sortfilteredProduct = useMemo(() => {
    let filteredProducts = products;
    if(filter !== 'all') {
      filteredProducts = products.filter((product) => product.availability === filter)
    }

    filteredProducts = [...filteredProducts]

    return filteredProducts
  }, [products, filter]);

  const handleSelectedProduct = (selected: string) => {
    if (selected) {
      router.push(`/inventory/${selected}`)
    }
  };



  return (
    <>
      <table className="w-full">
        <TableHead />
        <tbody>
          {sortfilteredProduct.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-text-grey font-medium text-sm py-3">
                No product available
              </td>
            </tr>
          ) : (
            sortfilteredProduct?.map((product) => (
              <tr
                key={product.id}
                className="lg:border-b last:border-b-0 border-border-primary *:py-3 text-text-grey font-medium text-sm cursor-pointer"
                onClick={() => handleSelectedProduct(String(product.id))}
              >
                <TableData product={product} />
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <Button type="button" variant="outline" className="max-w-[100px]">
          Previous
        </Button>
        <p>Page 1 of 10</p>
        <Button type="button" variant="outline" className="max-w-[100px]">
          Next
        </Button>
      </div>
    </>
  );
};

export default InventoryTable;
