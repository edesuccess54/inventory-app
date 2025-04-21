import Header from '@/components/Header'
import SidePanel from '@/components/SidePanel'


const ProtectedLayout = ({children}: {
    children:React.ReactNode
}) => {

  return (
    <div className='flex bg-[#f1f2f3]'>
        <SidePanel />
        <div className='flex-1'>
            <Header />
            <div className='px-3 py-3 overflow-y-auto h-[calc(100vh-80px)]'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default ProtectedLayout