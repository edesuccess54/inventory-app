'use client'

import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import BestSellingCategory from "./table/Index";
import { ProfitRevenueChart } from "./chart";
import { useChartData } from "./chart/hooks";

const DetailCard = ({ amount, name, color }: { amount: number; name: string; color: string }) => {
  return (
    <div className="flex flex-col justify-between">
      <p className="text-[#5D6679] font-medium text-base">${Number(amount).toLocaleString()}</p>
      <p className="text-sm mt-1" style={{ color: color ? color : "" }}>
        {name}
      </p>
    </div>
  );
};

const Report = () => {
const {chartData} = useChartData([5000, 25000, 50000, 120000, 30000])

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5.5">
        <Card>
          <p className="text-text-default font-medium text-xl">Overview</p>
          <div className="flex justify-between mt-5 mb-4 lg:w-[452px]">
            <DetailCard name="Total Profit" amount={21190} color="#555555" />
            <DetailCard name="Revenue" amount={18300} color="#DBA362" />
            <DetailCard name="Sales" amount={17432} color="#845EBC" />
          </div>
          <div className="border border-t-[#F0F1F3] border-b-0" />
          <div className="flex flex-wrap gap-3 justify-between mt-5">
            <DetailCard name="Net purchase value" amount={21190} color="#667085" />
            <DetailCard name="Net sales value" amount={18300} color="#667085" />
            <DetailCard name="MoM Profit" amount={17432} color="#667085" />
            <DetailCard name="YoY Profit" amount={18300} color="#667085" />
          </div>
        </Card>

        <Card>
          <div className="text-text-default font-medium text-xl flex justify-between items-center">
            <p className="text-xl font-medium text-text-default">Best selling category</p>
            <Link href="#" className="text-sm text-text-blue">
              See all
            </Link>
          </div>

          <div className="mt-5">
            <BestSellingCategory />
          </div>
        </Card>
      </div>

      <ProfitRevenueChart data={chartData} />
    </div>
  );
};

export default Report;
