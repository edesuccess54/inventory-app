import Image from 'next/image'
import { FilterIcon } from '@/assets'
import { useInventorySlice } from '@/redux/inventory/inventory.slice'
import { dispatch } from '@/redux/store'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Check } from 'lucide-react'

const FilterButton = () => {
    const {filter, setUpdateFilter } = useInventorySlice();

    const filterMenuItems = [
        {
          key: 'all',
          textValue: 'all',
          text: 'All',
          className: ''
        },
        {
          key: 'in-stock',
          textValue: 'in-stock',
          text: 'In-stock',
          className: ''
        },
        {
          key: 'out-of-stock',
          textValue: 'out-of-stock',
          text: 'Out-of-stock',
          className: ''
        },
        {
          key: 'expired',
          textValue: 'expired',
          text: 'Expired',
          className: ''
        },
        {
          key: 'doesnotexpire',
          textValue: 'does-not-expire',
          text: 'Does-not-expire',
          className: ''
        },
      ]
    
      const handleFilter = (selected: string) => {
        dispatch(setUpdateFilter(selected))
      }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer px-2 py-2 my-3 rounded-md border border-border-primary w-full">
        <Image src={FilterIcon} alt="filter icon" /> Filters
      </DropdownMenuTrigger>

      <DropdownMenuContent loop={true}>
        {filterMenuItems.map(({ key, textValue, text, className }) => (
          <DropdownMenuItem
            onSelect={() => handleFilter(textValue)}
            key={key}
            textValue={textValue}
            className={`${className}`}
          >
            {text}
            {filter === textValue && <Check className="h-4 w-4 text-text-light-blue" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterButton