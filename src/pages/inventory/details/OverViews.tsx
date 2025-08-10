import Image from 'next/image';
import React from 'react'

const renderProductDetails = (label: string, value: string) => {
  return (
    <div className="flex justify-between w-[350px] mb-6">
      <p className="font-medium flex-1 text-text-subdued text-sm">{label}</p>
      <p className='text-left basis-[100px] text-text-dark'>{value}</p>
    </div>
  );
}

const OverViews:React.FC<{product: ProductProps}> = ({product}) => {
  
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-base font-semibold text-text-highlight mb-2">Primary Details</h1>

          {renderProductDetails("Product name", "Maggi")}
          {renderProductDetails("Product ID", "456567")}
          {renderProductDetails("Product category", "Instant food")}
          {renderProductDetails("Expiry Date", "13/4/23")}
          {renderProductDetails("Threshold Value", "12")}

          <h1 className="text-base font-semibold text-text-highlight mt-8 mb-2">
            Supplier Details
          </h1>

          {renderProductDetails("Supplier name", "Ngozi Ebere")}
          {renderProductDetails("Contact Number", "08131597158")}
        </div>

        <div className="">
          <div className="flex justify-center w-[170px] h-[170px] border border-dashed border-border-subdued items-center">
            <Image
              src="/images/product-image.png"
              alt="Product"
              width={150}
              height={150}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="mt-[62px]">
            {renderProductDetails("Opening Stock", "40")}
            {renderProductDetails("Remaining  Stock", "34")}
            {renderProductDetails("On the Way", "15")}
            {renderProductDetails("Remaining  Stock", "34")}
            {renderProductDetails("Threshold Value", "12")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViews