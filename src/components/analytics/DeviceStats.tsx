import React from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

const devices = [
  { name: 'Mobile', icon: Smartphone, percentage: 65, color: 'text-blue-500' },
  { name: 'Desktop', icon: Laptop, percentage: 25, color: 'text-purple-500' },
  { name: 'Tablet', icon: Tablet, percentage: 10, color: 'text-green-500' },
];

export function DeviceStats() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold mb-6 dark:text-white">Device Distribution</h3>
      <div className="grid grid-cols-3 gap-4">
        {devices.map((device) => (
          <div key={device.name} className="text-center">
            <device.icon className={`h-8 w-8 mx-auto mb-2 ${device.color}`} />
            <div className="text-2xl font-bold mb-1 dark:text-white">{device.percentage}%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{device.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}