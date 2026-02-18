"use client";

import React, { useCallback, useRef, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartArea,
  ScriptableChartContext
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const options = {
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
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
      title: {
        display: true,
        text: "Revenue Amount",
        font: {
          size: 14,
        },
        //   color: "#46A46C",
      },
      ticks: {
        stepSize: 15000,
        //   color: "#46A46C",
        callback: function (val: any) {
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
  },
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

const RevenueChart = () => {
  const chartRef = useRef<any>(null);
  const [gradientColor, setGradientColor] = useState({
    start: '#0f50aa',
    end: 'rgba(196, 232, 238, 0.00)',
  });

  const generateGradient = useCallback(
    (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
      const gradient = ctx.createLinearGradient(
        0,
        chartArea.top,
        0,
        chartArea.bottom,
      );
      gradient.addColorStop(0, gradientColor.start);
      gradient.addColorStop(1, gradientColor.end);

      return gradient;
    },
    [gradientColor],
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [45000, 30000, 48000, 68000, 45000, 25000, 39000, 50000, 30000, 90000, 10000, 25000],
        fill: true,
        backgroundColor: (context: ScriptableChartContext) => {
          const chart = context.chart
          const {ctx, chartArea} = chart

          if(!ctx || !chartArea) {
            return undefined
          }
          return generateGradient(ctx, chartArea)
        },
        borderColor: "#1570ef ",
        borderWidth: 2,
        tension: 0.6,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#1570ef ",
        pointHoverBorderColor: "#1570ef ",
        pointHoverBorderWidth: 2,
        pointStyle: "circle",
        pointBorderColor: "#1570ef ",
        pointBorderWidth: 2,
        pointBackgroundColor: "#1570ef ",
        pointHitRadius: 10,
        pointRotation: 0,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line ref={chartRef} options={options} data={data}></Line>
    </div>
  );
};

export default RevenueChart;
