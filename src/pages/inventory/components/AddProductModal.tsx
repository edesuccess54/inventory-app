import { Button } from "@/components/buttons";
import RegularInput from "@/components/inputs/RegularInput";
import Modal from "@/components/modal/Modal";
import { toggleModal } from "@/components/modal/modalManager";

import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFileSelection } from "../hooks";
import ImageUpload from "./ImageUpload";
import { productInitailValues } from "../utils";
import { addProductSchema } from "../schema/addProductSchema";

const AddProductModal = () => {
  const methods = useForm<addProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: productInitailValues,
    mode: "onChange",
  });
  const { setValue, setError, clearErrors } = methods;
  const { handleFileInputChange, removeFile, file, handleDrop, avatarUrl } = useFileSelection({
    setValue,
    setError,
    clearErrors,
  });

  const handleSubmitForm = (values: any) => {
    console.log(values);
  };

  return (
    <Modal modalId="add-product-modal" closeOnBackdropClick={true}>
      <div className="bg-background-white p-8 lg:w-[523px] rounded-sm">
        <h2 className="text-[#383E49] text-lg font-medium">New product</h2>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
            <ImageUpload
              file={file}
              avatarUrl={avatarUrl as string}
              removeFile={removeFile}
              handleDrop={handleDrop}
              handleFileInputChange={handleFileInputChange}
            />

            <div className="*:mb-5">
              <div className="flex justify-between items-center">
                <label htmlFor="productName" className="text-base text-[#48505E]">
                  Product Name
                </label>
                <Controller
                  name="productName"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="productName"
                      type="text"
                      placeholder="Product name"
                      className="w-[315px] mb-0"
                    />
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="category" className="text-[#48505E]">Category</label>
                <Controller
                  name="category"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="category"
                      type="text"
                      placeholder="Product category"
                      className="w-[315px] mb-0"
                    />
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="buyingPrice" className="text-[#48505E]">Buying price</label>
                <Controller
                  name="purchasePrice"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="purchasePrice"
                      name="purchasePrice"
                      type="text"
                      placeholder="Buying price"
                      className="w-[315px] mb-0"
                    />
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="quantity" className="text-[#48505E]">Quantity</label>
                <Controller
                  name="quantity"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="quantity"
                      type="text"
                      placeholder="quantity"
                      className="w-[315px] mb-0"
                    />
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="purchaseAmount" className="text-[#48505E]">Total Amount</label>
                <Controller
                  name="totalAmount"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="totalAmount"
                      type="number"
                      placeholder="0:00"
                      disabled={true}
                      className="w-[315px] mb-0"
                    />
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="expiringDate" className="text-[#48505E]">Expiring Date</label>
                <Controller
                  name="expiringDate"
                  render={({ field }) => (
                    <RegularInput
                      {...field}
                      id="expiringDate"
                      type="date"
                      className="w-[315px] mb-0"
                      onChange={() => {}}
                    />
                  )}
                />
              </div>

              <div className="flex justify-between gap-5">
                <div className="w-[110px]">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => toggleModal("add-product-modal")}
                  >
                    Cancel
                  </Button>
                </div>

                <Button className="w-[116px ]" type="submit">
                  Add product
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default AddProductModal;
