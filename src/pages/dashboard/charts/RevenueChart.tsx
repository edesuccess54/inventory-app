"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
  const [gradient, setGradient] = useState<string | CanvasGradient>("");

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = chartRef.current;
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(70, 164, 108, 0.3)"); // light green top
    gradient.addColorStop(1, "rgba(70, 164, 108, 0)"); // transparent bottom
    setGradient(gradient);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [45000, 30000, 48000, 68000, 45000, 25000, 39000, 50000, 30000, 90000],
        fill: true,
        // backgroundColor: 'rgba(70, 164, 108, 0.2)',
        backgroundColor: gradient,
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

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const currentMonthIndex = new Date().getMonth(); // 0-based

    if (currentMonthIndex >= data.labels.length) return;

    chart.tooltip?.setActiveElements([{ datasetIndex: 0, index: currentMonthIndex }], {
      x: 0,
      y: 0,
    });

    chart.update();
  }, []);

  return <Line ref={chartRef} options={options} data={data}></Line>;
};

export default RevenueChart;
