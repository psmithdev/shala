import React from "react";
import { Radar } from "react-chartjs-2";

const ChakraRadarChart = ({ data }) => {
  const radarChartData = {
    labels: [
      "Root",
      "Sacral",
      "Solar",
      "Heart",
      "Throat",
      "Third Eye",
      "Crown",
    ],
    datasets: [
      {
        label: "Chakra Strengths",
        data: [
          data.root,
          data.sacral,
          data.solar,
          data.heart,
          data.throat,
          data.thirdEye,
          data.crown,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: "gray" },
        grid: { color: "lightgray" },
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <Radar data={radarChartData} options={options} />;
};

export default ChakraRadarChart;
