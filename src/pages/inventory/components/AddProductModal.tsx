import { Button } from "@/components/buttons";
import RegularInput from "@/components/inputs/RegularInput";
import Modal from "@/components/modal/Modal";
import { toggleModal } from "@/components/modal/modalManager";
import React from "react";

const AddProductModal = () => {
  return (
    <Modal modalId="add-product-modal" closeOnBackdropClick={true}>
      <div className="bg-background-white p-8 lg:w-[523px] rounded-sm">
        <h2>New product</h2>

        <div className="my-5 flex justify-center items-center gap-5">
          <div className="w-20 h-20 rounded-sm border border-dashed border-[#9D9D9D]"></div>

          <RegularInput
            id="productImage"
            name="productImage"
            type="file"
            placeholder=""
            className="w-[315px] mb-0 hidden"
            onChange={() => {}}
          />
          <label htmlFor="productImage">
            <p>Drag image here</p>
            <p className="text-center">or</p>
            <p>Browse image</p>
          </label>
        </div>

        <div className="*:mb-5">
          <div className="flex justify-between items-center">
            <label htmlFor="productName" className="text-base">
              Product Name
            </label>
            <RegularInput
              id="productName"
              name="productName"
              type="text"
              placeholder="Product name"
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="category">Category</label>
            <RegularInput
              id="category"
              name="category"
              type="text"
              placeholder="Product category"
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="buyingPrice">Buying price</label>
            <RegularInput
              id="buyingPrice"
              name="buyingPrice"
              type="number"
              placeholder="Buying price"
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="quantity">Quantity</label>
            <RegularInput
              id="quantity"
              name="quantity"
              type="text"
              placeholder="quantity"
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="purchaseAmount">Total Amount</label>
            <RegularInput
              id="purchaseAmount"
              name="purchaseAmount"
              type="number"
              placeholder="0:00"
              disabled={true}
              value={100}
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="expiringDate">Expiring Date</label>
            <RegularInput
              id="expiringDate"
              name="expiringDate"
              type="date"
              className="w-[315px] mb-0"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-between gap-5">
            <Button
              type="button"
              variant="outline"
              onClick={() => toggleModal("add-product-modal")}
            >
              Cancel
            </Button>

            <Button type="button">Add product</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddProductModal;
