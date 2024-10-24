import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

const EVRangeChart = ({ data }) => {
  const rangeCounts = data.reduce((acc, row) => {
    const range = row[5]; // Assuming the range data is in the 6th column
    if (range) acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(rangeCounts).slice(0, 5), // Top 5 range categories
    datasets: [
      {
        label: 'EV Range Distribution',
        data: Object.values(rangeCounts).slice(0, 5),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">EV Range Distribution</h2>
      <div className="w-3/4">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default EVRangeChart;
