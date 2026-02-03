import { useEffect } from "react";

import { Button } from "@/components/buttons";
import RegularInput from "@/components/inputs/RegularInput";
import Modal from "@/components/modal/Modal";
import { toggleModal } from "@/components/modal/modalManager";

import { Controller, FormProvider, useForm } from "react-hook-form";
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
  const { setValue, setError, clearErrors, watch, control, formState:{errors} } = methods;
  const { handleFileInputChange, removeFile, file, handleDrop, avatarUrl } = useFileSelection({
    setValue,
    setError,
    clearErrors,
  });

  const [purchasePrice, quantity] = watch(["purchasePrice", "quantity"]);

  useEffect(() => {
    const totalAmount = purchasePrice && quantity 
    ? parseFloat(String(purchasePrice)) * parseInt(String(quantity)) 
    : 0;

    setValue("totalAmount", totalAmount);
  }, [purchasePrice,quantity, setValue]);

  const handleSubmitForm = (values: any) => {
    console.log(values);
  };

  return (
    <Modal modalId="add-product-modal" closeOnBackdropClick={true}>
      <div className="bg-background-white p-6 lg:w-[523px] rounded-sm">
        <h2 className="text-[#383E49] text-lg font-medium">New product</h2>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
            <div className="flex flex-col justify-between">
              <ImageUpload
                file={file}
                avatarUrl={avatarUrl as string}
                removeFile={removeFile}
                handleDrop={handleDrop}
                handleFileInputChange={handleFileInputChange}
              />

              <div className="*:mb-5 flex-1 max-h-98 overflow-auto">
                <div className="overflow-y-auto *:mb-5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="productName" className="text-base text-[#48505E]">
                      Product Name
                    </label>
                    <Controller
                      name="productName"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="productName"
                          type="text"
                          placeholder="Product name"
                          className="w-[315px] mb-0"
                          showError={!!errors.productName}
                          errorMessage={errors.productName?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <label htmlFor="category" className="text-[#48505E]">Category</label>
                    <Controller
                      name="productCategory"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="productCategory"
                          type="text"
                          placeholder="Product category"
                          className="w-[315px] mb-0"
                          showError={!!errors.productCategory}
                          errorMessage={errors.productCategory?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <label htmlFor="buyingPrice" className="text-[#48505E]">Buying price</label>
                    <Controller
                      name="purchasePrice"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="purchasePrice"
                          name="purchasePrice"
                          type="number"
                          placeholder="Buying price"
                          className="w-[315px] mb-0"
                          onChange={(e) => {
                            const value = e.target.value;
                            // Allow only numeric input
                            if (/^\d*$/.test(value)) {
                              field.onChange(value === "" ? "" : Number(value));
                            }
                          }}
                          showError={!!errors.purchasePrice}
                          errorMessage={errors.purchasePrice?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <label htmlFor="quantity" className="text-[#48505E]">Quantity</label>
                    <Controller
                      name="quantity"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="quantity"
                          type="number"
                          placeholder="quantity"
                          onChange={(e) => {
                            const value = e.target.value;
                            // Allow only numeric input
                            if (/^\d*$/.test(value)) {
                              field.onChange(value === "" ? "" : Number(value));
                            }
                          }}
                          className="w-[315px] mb-0"
                          showError={!!errors.quantity}
                          errorMessage={errors.quantity?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <label htmlFor="purchaseAmount" className="text-[#48505E]">Total Amount</label>
                    <Controller
                      name="totalAmount"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="totalAmount"
                          type="number"
                          placeholder="0:00"
                          disabled={true}
                          className="w-[315px] mb-0"
                          value={field.value as number}
                          showError={!!errors.totalAmount}
                          errorMessage={errors.totalAmount?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <label htmlFor="expiringDate" className="text-[#48505E]">Expiring Date</label>
                    <Controller
                      name="expiringDate"
                      control={control}
                      render={({ field }) => (
                        <RegularInput
                          {...field}
                          id="expiringDate"
                          type="date"
                          className="w-[315px] mb-0"
                        />
                      )}
                    />
                  </div>
                </div>
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
