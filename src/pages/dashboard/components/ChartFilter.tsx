"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarArrowUp, Check } from "lucide-react";
import React, { useState } from "react";

const ChartFilter = () => {
  const [selected, setSelected] = useState<string>("weekly");

  const filterOptions = [
    {
      label: "Weekly",
      textValue: "weekly",
    },

    {
      label: "Monthly",
      textValue: "monthly",
    },

    {
      label: "Quartely",
      textValue: "quartely",
    },

    {
      label: "Yearly",
      textValue: "yearly",
    },
  ];

  const handleOnSelect = (selected: string) => {
    setSelected(selected);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border border-[#D0D3D9] rounded-sm outline-0 w-[109px]"
        >
          <CalendarArrowUp className="mr-1 h-5 w-5" />
          {selected.charAt(0).toUpperCase() + selected.slice(1)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {filterOptions.map(({ label, textValue }) => (
          <DropdownMenuItem
            key={textValue}
            textValue={textValue}
            className={`${textValue === selected && "bg-background-default"} flex justify-between items-center`}
            onSelect={() => handleOnSelect(textValue)}
          >
            {label}
            {selected === textValue && <Check className="h-4 w-4 text-text-default" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChartFilter;
