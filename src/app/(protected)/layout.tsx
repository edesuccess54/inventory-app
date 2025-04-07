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
            <div className='px-8 py-6 overflow-y-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default ProtectedLayout