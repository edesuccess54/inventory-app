import Link from "next/link";
import RevenueChart from "./charts/RevenueChart";
import SalesChart from "./charts/SalesChart";
import Statstics from "./Statstics";
import TableHead from "@/components/TableHead";
import Image from "next/image";
import { lays, tataSalt } from "@/assets";
import { getStatusClass, getStatusText } from "@/utils/statusLabel";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Statstics />
      <div className="flex gap-3 w-full">
        <div className="h-[360px] grow-1 bg-background-white rounded-lg shadow-md p-5">
          <SalesChart />
        </div>

        <div className=" basis-[380px] bg-background-white rounded-lg shadow-md p-5">
          <RevenueChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-background-white rounded-[10px] p-5 flex-1">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#383E49] text-xl font-medium">Top selling stock</h2>
            <Link href="/top-selling" className="text-text-blue text-sm">Sell all</Link>
          </div>

          <table className="text-left w-full">
            <TableHead tableHead={['name', "Sold Quantity", "Remaining Quantity", "Price"]} />
            <tbody className="text-sm">
              <tr className="*:py-3 border-b border-border-primary">
                <td>Hennessy</td>
                <td>200</td>
                <td>10</td>
                <td>$75000</td>
              </tr>

              <tr className="*:py-3 border-b border-border-primary">
                <td>Four cousins</td>
                <td>150</td>
                <td>15</td>
                <td>$8500</td>
              </tr>

               <tr className="*:py-3">
                <td>Ciroc Blue</td>
                <td>400</td>
                <td>40</td>
                <td>$45,000</td>
              </tr>

               <tr className="*:py-3">
                <td>Ciroc Blue</td>
                <td>400</td>
                <td>40</td>
                <td>$45,000</td>
              </tr>

              
            </tbody>
          </table>

        </div>


        <div className="basis-[380px] bg-background-white p-5 px-4 rounded-[10px]">
           <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#383E49] text-xl font-medium">Low Quantity Stock</h2>
            <Link href="/top-selling" className="text-text-blue text-sm">Sell all</Link>
          </div>

          <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-15">
                  <Image src={tataSalt} className="w-full"  alt="product image"/>
                </div>

                <div>
                  <p className="text-base font-semibold text-text-default">Tata Salt</p>
                  <p className="text-sm text-text-grey-500 mt-1">Remaining Quantity : 10 Packets</p>
                </div>

                <p><span className={getStatusClass('low')}>{getStatusText('low')}</span></p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-15">
                  <Image src={lays} className="w-full"  alt="product image"/>
                </div>

                <div>
                  <p className="text-base font-semibold text-text-default">Lays</p>
                  <p className="text-sm text-text-grey-500 mt-1">Remaining Quantity : 10 Packets</p>
                </div>

                <p><span className={getStatusClass('low')}>{getStatusText('low')}</span></p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-15">
                  <Image src={lays} className="w-full object-contain"  alt="product image"/>
                </div>

                <div>
                  <p className="text-base font-semibold text-text-default">Lays</p>
                  <p className="text-sm text-text-grey-500 mt-1">Remaining Quantity : 10 Packets</p>
                </div>

                <p><span className={getStatusClass('low')}>{getStatusText('low')}</span></p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
