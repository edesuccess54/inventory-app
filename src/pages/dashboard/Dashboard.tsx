import RevenueChart from "./charts/RevenueChart"
import SalesChart from "./charts/SalesChart"
import Statstics from "./Statstics"

const Dashboard:React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Statstics />

      <div className="flex gap-3 w-full">
        <div className="h-[300px] grow-1 bg-white rounded-lg shadow-md p-5">
          <SalesChart /> 
        </div>

        <div className=" basis-[380px] bg-white rounded-lg shadow-md p-5">
          <RevenueChart /> 
        </div>

      </div>
    </div>
  )
}

export default Dashboard