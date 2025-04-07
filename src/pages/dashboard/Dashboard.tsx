import SalesChart from "./charts/SalesChart"
import Statstics from "./Statstics"

const Dashboard:React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Statstics />

      <div className="flex gap-5 h-[600px]">
        <SalesChart /> 

        <SalesChart />   
      </div>
    </div>
  )
}

export default Dashboard