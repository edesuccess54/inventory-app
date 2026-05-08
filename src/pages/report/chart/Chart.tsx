import React from 'react'
import { LineChart } from './LineChart'

interface ChartDataProps {
    data: any
}

const ProfitRevenueChart:React.FC<ChartDataProps> = ({data}) => {

  return (
    <div className='bg-background-white p-6 rounded-xl h-auto my-5'>
        <div className="flex justify-between items-center mb-3">
            <p>Profit & Loss</p>
            <button className="border border-border-primary px-4 py-1.5 rounded-sm"> Weekly </button>
        </div>

        <div className='h-[272px]'>
            <LineChart data={data} />
        </div>

    </div>
  )
}

export default ProfitRevenueChart