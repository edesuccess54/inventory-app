"use client";

import { MouseEvent } from "react";

interface TabsProps {
  activeTab: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onClick }) => {
  const tabs = ["Overview", "Purchases", "Adjustments", "History"];
  return (
    <div className="flex gap-12 border-b-2 border-border-primary">
      {tabs.map((tab) => (
        <button
          key={tab}
          disabled={activeTab === tab}
          className={`${activeTab === tab ? "text-[#1A73E8] cursor-not-allowed border-b-3 border-b-border-active" : "text-[#667085] cursor-pointer"} font-normal -mb-0.5 text-base py-4`}
          onClick={onClick}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs