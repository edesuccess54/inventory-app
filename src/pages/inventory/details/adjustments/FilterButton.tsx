import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitaliseText } from "@/utils/capitaliseText";
import { ChevronDown, FilterIcon } from "lucide-react";
import React from "react";

const FilterButton = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("all");

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filters = ["all", "deduction", "addition"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2 cursor-pointer px-2 py-2 my-3 rounded-md border border-border-primary w-full">
          <FilterIcon className="size-4 text-text-default" />
          <span>Filters</span>
          <ChevronDown className="size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent loop={true}>
        {filters.map((filter) => (
          <DropdownMenuItem
            key={filter}
            onSelect={() => handleFilterSelect(filter)}
            className={selectedFilter === filter ? "bg-[#e1e1e1]" : ""}
          >
            {capitaliseText(filter)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterButton;
