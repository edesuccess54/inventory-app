import React from 'react'
import FilterButton from './FilterButton'
import { Button } from '@/components/buttons'

const Adjustments = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-4">
        <FilterButton />
        <div>
          <Button type="button" variant="solid">
            + New Adjustment
          </Button>
        </div>
      </div>

      <div className='mt-4'>

      </div>
    </div>
  );
}

export default Adjustments