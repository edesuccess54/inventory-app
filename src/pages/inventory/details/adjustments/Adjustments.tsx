import React from 'react'
import FilterButton from './FilterButton'
import { Button } from '@/components/buttons'
import AdjustmentTable from './table/Index';

const Adjustments = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <FilterButton />
        <div>
          <Button type="button" variant="solid">
            + New Adjustment
          </Button>
        </div>
      </div>

      <AdjustmentTable />
    </>
  );
}

export default Adjustments