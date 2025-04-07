import { CancelIcon, CategoriesIcon, CostIcon, ProfitIcon, PurchaseBagIcon, RevenueIcons, SalesIcon, SuppliersIcon } from '@/assets'
import ItemCard from '@/components/dashboard/ItemCard'
import OverViewCard from '@/components/dashboard/OverViewCard'
import React from 'react'

const Statstics = () => {
  return (
    <>
        <div className="flex gap-5">
          <OverViewCard heading="Sales Overview">
            <div className="mt-[22px] flex gap-5">
              <ItemCard title="Sales" amount={1000} icon={SalesIcon} color="#E8F1FD"/>
              <ItemCard title="Revenue" amount={1000} icon={RevenueIcons} color="#ECEAFF"/>
              <ItemCard title="Profit" amount={1000} icon={ProfitIcon} color="#FFEEDB"/>
              <ItemCard title="Cost" amount={1000} icon={CostIcon} color="#EBFFED" last={true} />
            </div>
          </OverViewCard>

        <div className="basis-[380px]">
          <OverViewCard heading="Inventory Summary">
            <div className="mt-[22px] flex gap-5">
              <ItemCard title="Quantity" total={1000} icon={SalesIcon} color="#E8F1FD"/>
              <ItemCard title="On the way" total={500} icon={RevenueIcons} color="#ECEAFF" last={true}/>
            </div>
          </OverViewCard>
        </div>
      </div>

      <div className="flex gap-5">
        <OverViewCard heading="Purchase Overview">
          <div className="mt-[22px] flex gap-5">
            <ItemCard title="Purchase" total={82} icon={PurchaseBagIcon} color="#E8F1FD"/>
            <ItemCard title="Cost" amount={1000} icon={CostIcon} color="#ECEAFF"/>
            <ItemCard title="Cancel" total={10} icon={CancelIcon} color="#FFEEDB"/>
            <ItemCard title="Return" amount={1000} icon={ProfitIcon} color="#EBFFED" last={true} />
          </div>
        </OverViewCard>

        <div className="basis-[380px]">
          <OverViewCard heading="Product Summary">
            <div className="mt-[22px] flex gap-5">
              <ItemCard title="Suppliers" total={200} icon={SuppliersIcon} color="#E8F1FD"/>
              <ItemCard title="Categories" total={50} icon={CategoriesIcon} color="#ECEAFF" last={true}/>
            </div>
          </OverViewCard>
        </div>
      </div>
    </>
  )
}

export default Statstics