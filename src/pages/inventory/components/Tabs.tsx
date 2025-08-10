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
          className={`${activeTab === tab ? "text-[#48505E]" : "text-[#667085"} font-normal -mb-0.5 text-base py-4 cursor-pointer ${activeTab === tab ? "border-b-3 border-b-border-active" : ""}`}
          onClick={onClick}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs