import { Button } from "@/components/buttons";
import RegularInput from "@/components/inputs/RegularInput";
import { Search, SearchCheck, SearchCheckIcon, SearchXIcon } from "lucide-react";
import React from "react";
import PurchaseTable from "./Table/Index";

const Purchases = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <RegularInput
          type="text"
          name=""
          icon={Search}
          placeholder="Search by product name, ID, category etc"
          className="w-[315px]"
        />
        <Button type="button" className="min-w-[200px]">
          Add product
        </Button>
      </div>

      <PurchaseTable />
    </>
  );
};

export default Purchases;
