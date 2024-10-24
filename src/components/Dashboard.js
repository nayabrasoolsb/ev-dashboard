import React from 'react';
import EVGrowthChart from './EVGrowthChart';
import EVModelChart from './EVModelChart';
import EVRangeChart from './EVRangeChart';

const Dashboard = ({ data }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EVGrowthChart data={data} />
        <EVModelChart data={data} />
        <EVRangeChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
