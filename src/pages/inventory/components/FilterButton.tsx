import Image from 'next/image'
import { FilterIcon } from '@/assets'
import { useInventorySlice } from '@/redux/inventory/inventory.slice'
import { dispatch } from '@/redux/store'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

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
    <Dropdown radius="sm" placement="bottom-end" showArrow>
        <DropdownTrigger>
        <button type="button"  className="flex items-center gap-2 cursor-pointer px-2 py-2 my-3 rounded-md border border-border-primary w-full">
            <Image src={FilterIcon} alt="filter icon" /> Filters
        </button>
        </DropdownTrigger>

        <DropdownMenu selectedKeys={filter} onAction={(key) => handleFilter(key)}>
        {filterMenuItems.map(({key, textValue, text, className}) => (
            <DropdownItem
            key={key} 
            textValue={textValue}
            className={`${className}`}
            >
            {text}
            </DropdownItem>
        ))}
        </DropdownMenu>
    </Dropdown>
  )
}

export default FilterButton