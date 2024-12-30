import React from 'react';
import { Globe } from 'lucide-react';

const platforms = [
  { name: 'Shopify', percentage: 45, color: 'bg-green-500' },
  { name: 'WooCommerce', percentage: 25, color: 'bg-purple-500' },
  { name: 'Wix', percentage: 15, color: 'bg-blue-500' },
  { name: 'Custom', percentage: 15, color: 'bg-yellow-500' },
];

export function PlatformInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="font-semibold dark:text-white">Platform Distribution</h3>
      </div>
      <div className="space-y-4">
        {platforms.map((platform) => (
          <div key={platform.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium dark:text-white">{platform.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{platform.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${platform.color} h-2 rounded-full`}
                style={{ width: `${platform.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}