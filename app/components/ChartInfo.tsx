"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { ChartInfoProps } from "@/types";
import { prepareDataForDoughnutChart } from "@/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartInfo = ({ transactions }: ChartInfoProps) => {
  const sumsByCategory = prepareDataForDoughnutChart(transactions);

  const chartData = {
    labels: Object.keys(sumsByCategory),
    datasets: [
      {
        label: "$",
        data: Object.values(sumsByCategory),
        backgroundColor: [
          "#FF5733",
          "#2ECC71",
          "#8E44AD",
          "#e73cd6",
          "#3498DB",
          "#F1C40F",
          "#3498DB",
          "#8fe73c",
        ],
      },
    ],
  };

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      }}
    />
  );
};

export default ChartInfo;
