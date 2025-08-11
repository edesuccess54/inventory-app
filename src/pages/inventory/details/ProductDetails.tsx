"use client";

import { Button } from '@/components/buttons';
import { fakeProducts } from '@/mock/fakeProducts';
import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs';
import OverViews from './overview/OverViews';
import Purchases from './purchases/Purchases';
import Adjustments from './adjustments/Adjustments';
import History from './history/History';

interface ProductIdProps {
  productId: string;
}

const ProductDetails: React.FC<ProductIdProps> = ({ productId }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const ProductDetails = fakeProducts.find((product) => product.id === Number(productId));

  const handleSwitchTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tab = e.currentTarget.textContent;
    if (tab) {
      setActiveTab(tab);
    }
  }
  
  return (
    <div className="p-4 bg-background-white rounded-lg h-full">
      <div className="flex justify-between lg:mb-8">
        <h2 className="text-xl font-medium">{ProductDetails?.productName}</h2>
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline">
            Edit detail
          </Button>

          <Button type="button" variant="outline">
            Download
          </Button>
        </div>
      </div>

      <Tabs activeTab={activeTab} onClick={handleSwitchTab} />

      <div className="mt-8 overflow-y-auto h-[calc(100vh-320px)] pb-4">
        {activeTab === "Overview" && <OverViews product={ProductDetails} />}
        {activeTab === "Purchases" && <Purchases />}
        {activeTab === "Adjustments" && <Adjustments />}
        {activeTab === "History" && <History />}
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);