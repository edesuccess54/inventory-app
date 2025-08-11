import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, Filter, FilterIcon } from 'lucide-react'
import React from 'react'

const FilterButton = () => {
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
        <DropdownMenuItem onSelect={() => console.log("Filter by All")}>All</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Filter by In-stock")}>
          Deduction
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Filter by Out-of-stock")}>
          Addition
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterButton