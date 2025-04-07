"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    // responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        },
      
        x: {
            grid: {
                display: false,
            },
            categoryPercentage: 0.9,
        }

    },
    barThickness: 8,
    borderRadius: 10,
};
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    
    datasets: [
      {
        label: 'Purchase',
        data: [1000, 5000, 400, 4564, 5645, 5465, 1000, 5000, 400, 4564, 5645, 5465],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
      {
        label: 'Sales',
        data: [100, 500, 500, 1064, 2645, 3465, 100, 500, 500, 1064, 2645, 3465],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

const SalesChart = () => {
  return (
    <div className='bg-white flex1 p-8'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default SalesChart