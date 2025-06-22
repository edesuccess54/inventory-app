"use client";

import React from "react";
import InventoryOverAll from "./components/InventoryOverAll";
import { Button } from "@/components/buttons";
import Image from "next/image";
import { FilterIcon } from "@/assets";
import InventoryTable from "./table/Index";
import AddProductModal from "./components/AddProductModal";
import { toggleModal } from "@/components/modal/modalManager";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal } from "@heroui/react";

const Inventory = () => {
  return (
    <>
      <InventoryOverAll />

      <div className="mt-[22px] rounded-lg px-3 py-1 bg-background-white">
        <div className="flex justify-between items-center lg:mb-[22px]">
          <h2 className="text-text-default text-xl font-medium">Products</h2>

          <div className="grid grid-cols-3 gap-3">
            <Button type="button" onClick={() => toggleModal("add-product-modal")}>
              Add product
            </Button>
            

            <Dropdown>
              <DropdownTrigger>
                trigger
                {/* <Button type="button" variant="outline" className="flex items-center gap-2">
                  <Image src={FilterIcon} alt="filter icon" /> Filters
                </Button> */}
              </DropdownTrigger>

              <DropdownMenu>
                <DropdownItem key="in-stock">In stock</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            <Button type="button" variant="outline">
              Download all
            </Button>
          </div>
        </div>

        <InventoryTable />
      </div>
      <AddProductModal />

      <Modal>
        <div>
          this is a modal here
        </div>

      </Modal>
    </>
  );
};

export default Inventory;
