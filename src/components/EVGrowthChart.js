import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EVGrowthChart = ({ data }) => {
  const yearCounts = data.reduce((acc, row) => {
    const year = row[1]; // Assuming the year is in the second column
    if (year) acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: 'EV Growth Over Time',
        data: Object.values(yearCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">EV Growth Over Time</h2>
      <div className="w-full">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default EVGrowthChart;
