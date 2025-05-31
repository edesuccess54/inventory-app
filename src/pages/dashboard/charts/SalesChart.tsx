"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // ChartType,
  PointElement,
} from "chart.js";
import { useRef } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
      title: {
        display: true,
        text: "Purchase and Sales Amount",
        font: {
          size: 14,
          // weight: "bold",
        },
        // color: "#46A46C",
      },
      ticks: {
        stepSize: 500,
        // color: "#46A46C",
        callback: function (val) {
          if (val === 0) {
            return val;
          } else {
            if (val.toString().length >= 10) {
              return `$` + val / 1000000000 + "B";
            } else if (val.toString().length >= 7) {
              return `$` + val / 1000000 + "M";
            } else if (val.toString().length >= 4) {
              return `$` + val / 1000 + "k";
            } else if (val >= 2) {
              return `$` + val;
            }
          }
        },
      },
    },

    x: {
      grid: {
        display: false,
      },
    },
  },
  barThickness: 10,
  borderRadius: 5,
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const SalesChart: React.FC = () => {
  const chartRef = useRef(null);
  const getGradient = (
    ctx: CanvasRenderingContext2D,
    area: any,
    color1: string,
    color2: string
  ) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Purchase",
        data: [1000, 5000, 400, 4564, 5645, 5465, 1000, 5000, 400, 4564, 5645, 5465],
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "#0637817f";
          return getGradient(ctx, chartArea, "#817AF3", "#74B0FA");
        },
      },

      {
        label: "Sales",
        data: [100, 500, 500, 1064, 2645, 3465, 100, 500, 500, 1064, 2645, 3465],
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(6, 55, 129, 0.5)";
          return getGradient(ctx, chartArea, "#46A46C", "#51CC5D");
        },
      },
    ],
  };

  return <Bar ref={chartRef} options={options} data={data} />;
};

export default SalesChart;
