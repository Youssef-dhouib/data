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
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ComparisonChartsProps {
  timeframe: string;
}

export function ComparisonCharts({ timeframe }: ComparisonChartsProps) {
  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#F0F0F0',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Primary Website',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#0052CC',
        backgroundColor: 'rgba(0, 82, 204, 0.1)',
        fill: true,
      },
      {
        label: 'Competitor 1',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: '#FFB800',
        backgroundColor: 'rgba(255, 184, 0, 0.1)',
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Visitor Trends</h3>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}