"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { ChartOfMovementsProp } from "@/types";
import { prepareDataForVerticalChart } from "@/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartOfMovements = ({ transactions }: ChartOfMovementsProp) => {
  const labels = transactions.map((transaction) => transaction.date);

  const data = {
    labels,
    datasets: [
      {
        label: "expense",
        data: prepareDataForVerticalChart(transactions, "expense"),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "income",
        data: prepareDataForVerticalChart(transactions, "income"),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default ChartOfMovements;
