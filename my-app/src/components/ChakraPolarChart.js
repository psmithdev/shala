import React from "react";
import { PolarArea } from "react-chartjs-2";

const ChakraPolarChart = ({ chartData }) => {
  return (
    <div className="w-96 h-96">
      <PolarArea data={chartData} />
    </div>
  );
};

export default ChakraPolarChart;
