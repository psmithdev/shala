import React from "react";
import { PolarArea } from "react-chartjs-2";

const ChakraChart = ({ chartData }) => {
  return (
    <div className="w-96 h-96">
      <PolarArea data={chartData} />
    </div>
  );
};

export default ChakraChart;
