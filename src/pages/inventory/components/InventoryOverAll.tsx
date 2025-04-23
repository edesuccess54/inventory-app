import ItemCard from './ItemCard'

const InventoryOverAll:React.FC = () => {
  return (
    <div className='rounded-lg flex-1 px-3 py-4 bg-background-white'>
        <h1 className='text-text-default text-xl'>Overall Inventory</h1>
        <div className='flex gap-[30px] mt-4'>
            <ItemCard 
                heading='Total Products'
                color='#E19133'
                total={868}
                period="Last 7 days"
                amount={25000}
                title='Revenue'
            />

            <ItemCard 
                heading='Top Selling'
                color='#845EBC'
                total={20}
                period="Last 7 days"
                amount={120000}
                title='Cost'
            />

            <ItemCard 
                heading='Categories'
                color='#1570EF'
                total={14}
                period="Last 7 days"
            />

            <ItemCard 
                heading='Low Stocks'
                color='#F36960'
                total={20}
                period="Not in stock"
                last={true}
            />
        </div>
    </div>
  )
}

export default InventoryOverAll