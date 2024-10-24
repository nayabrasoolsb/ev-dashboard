import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components for the Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EVModelChart = ({ data }) => {
  const modelCounts = data.reduce((acc, row) => {
    const model = row[2]; // Assuming model is in the third column
    if (model) acc[model] = (acc[model] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(modelCounts).slice(0, 10), // Top 10 models
    datasets: [
      {
        label: 'Top EV Models',
        data: Object.values(modelCounts).slice(0, 10),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Top EV Models</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default EVModelChart;
