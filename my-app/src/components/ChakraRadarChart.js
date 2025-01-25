import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChakraRadarChart = ({ data = {} }) => {
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
          data.root || 0,
          data.sacral || 0,
          data.solar || 0,
          data.heart || 0,
          data.throat || 0,
          data.thirdEye || 0,
          data.crown || 0,
        ],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Wait for chart area to be set
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.top,
            chartArea.right,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(255, 99, 132, 0.5)"); // Pink
          gradient.addColorStop(0.5, "rgba(54, 162, 235, 0.5)"); // Blue
          gradient.addColorStop(1, "rgba(75, 192, 192, 0.5)"); // Teal
          return gradient;
        },
        borderColor: "#FF5733",
        borderWidth: 2,
        pointBackgroundColor: [
          "#FF0000",
          "#FF7F00",
          "#FFFF00",
          "#00FF00",
          "#0000FF",
          "#4B0082",
          "#8B00FF",
        ],
        pointHoverBackgroundColor: "#FFFFFF",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks: { backdropColor: "rgba(255, 255, 255, 0.7)" },
        grid: { color: "#E0E0E0" },
        angleLines: { color: "#B0B0B0" },
      },
    },
    plugins: {
      legend: {
        labels: { font: { size: 14, family: "Arial, sans-serif" } },
      },
    },
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Radar data={radarChartData} options={options} />
    </div>
  );
};

export default ChakraRadarChart;
