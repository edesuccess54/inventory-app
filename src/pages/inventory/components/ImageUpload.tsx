import { Button } from "@/components/buttons";
import { X } from "lucide-react";
import React, { ChangeEvent, forwardRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

interface ImageUploadProp {
  ref: React.RefObject<HTMLInputElement | null>;
  handleFileInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
  handleDrop: (e: React.DragEvent<HTMLLabelElement>) => void;
  file: File | null;
  avatarUrl: string;
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProp>(
  ({ handleFileInputChange, handleDrop, file, removeFile, avatarUrl, ...otherProps }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    const productImage = useWatch({ control, name: "productImage" });

    return (
      <div className="my-5 relative">
        <label
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          htmlFor="productImage"
          className="flex justify-center items-center gap-5"
        >
          <div className="relative">
            <img
                className="w-20 h-20 rounded-sm border border-dashed border-[#9D9D9D]"
                src={avatarUrl ? avatarUrl : (productImage as string)}
            />

            {avatarUrl && (
                <Button
                    type="button"
                    variant="ghost"
                    onClick={(e) => {
                        e.preventDefault()
                        removeFile()
                    }}
                    className="absolute -top-8 -right-5 w-8 h-8 flex justify-center items-center rounded-full bg-background-default z-50"
                >
                    <span><X size={15} className="text-red-800" /></span>
                </Button>
                )}
          </div>
          <input
            hidden
            id="productImage"
            name="productImage"
            type="file"
            value=''
            placeholder=""
            className="w-[315px] mb-0"
            ref={ref}
            onChange={handleFileInputChange}
            {...otherProps}
          />
          <div className="text-center text-sm text-[#858D9D]">
            <p>Drag image here</p>
            <p className="text-center">or</p>
            <p className="text-[#448DF2]">Browse image</p>
          </div>
        </label>

        {errors.productImage && (
          <p className="text-xs text-red-500 text-center font-medium mt-0.5">
            {errors.productImage.message as string}
          </p>
        )}
      </div>
    );
  }
);

export default ImageUpload;
