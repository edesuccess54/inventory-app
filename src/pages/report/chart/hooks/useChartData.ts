'use client'

// import { ScriptableChartContext } from "chart.js";

import { ChartArea, ScriptableChartContext } from "chart.js";
import { useCallback, useState } from "react";


export interface useChartDataSetType {
  chartData: {
    labels: string[];
    datasets: {
      type: string;
    //   label: string;
      yAxisID: string;
      fill: boolean;
      data: number[];
      backgroundColor: (
        context: ScriptableChartContext,
      ) => CanvasGradient | null;
      borderColor: string;
      borderWidth: number;
      tension: number;
    }[];
  };
}

export const useChartData = (reportData: number[]):useChartDataSetType => {
    const [gradientColor, setGradientColor] = useState({
    start: '#57CADB',
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

    const chartData = {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'December'],
        datasets: [
        {
            fill: false,
            type: 'line',
            yAxisID: 'y',
            data: [...reportData],
            
            backgroundColor: (context: ScriptableChartContext) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!ctx || !chartArea) {
                return null;
            }
            return generateGradient(ctx, chartArea);
            },

            borderColor: '#448DF2',
            borderWidth: 1.5,
            tension: 0.5,
        },

        {
            fill: false,
            type: 'line',
            yAxisID: 'y',
            data: [45000, 30000, 80000, 25000],
            
            backgroundColor: (context: ScriptableChartContext) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!ctx || !chartArea) {
                return null;
            }
            return generateGradient(ctx, chartArea);
            },

            borderColor: '#DBA362',
            borderWidth: 1.5,
            tension: 0.5,
        },
        ],
    }

    return {
        chartData
    }
}