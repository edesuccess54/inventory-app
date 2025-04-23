import React from 'react'
import TableHead from './TableHead'
import TableData from './TableData'
import { Button } from '@/components/buttons'

const InventoryTable = () => {
  return (
    <>
        <table className='w-full'>
            <TableHead />
            <tbody>
                {[...Array(7)].map((_, index) => (
                <tr 
                    key={index}
                    className='lg:border-b last:border-b-0 border-border-primary *:py-3 text-text-grey font-medium text-sm'>
                    <TableData />
                </tr>
                ))}
            </tbody>
        </table>

        <div className='flex justify-between items-center'>
            <div><Button type='button' variant='outline' className='min-w-[100px]'>Previous</Button></div>
            <p>Page 1 of 10</p>
            <div><Button type='button' variant='outline' className='min-w-[100px]'>Next</Button></div>
        </div>
    </>
  )
}

export default InventoryTable