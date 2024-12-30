import React from 'react';
import { Globe, MessageCircle, Share2, ShoppingBag } from 'lucide-react';

const sources = [
  { name: 'Direct', icon: Globe, percentage: 35, color: 'bg-blue-500' },
  { name: 'Social Media', icon: Share2, percentage: 28, color: 'bg-purple-500' },
  { name: 'Blog Posts', icon: MessageCircle, percentage: 22, color: 'bg-green-500' },
  { name: 'Marketplace', icon: ShoppingBag, percentage: 15, color: 'bg-yellow-500' },
];

export function TrafficSources() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold dark:text-white">Traffic Sources</h3>
      </div>
      <div className="space-y-4">
        {sources.map((source) => (
          <div key={source.name} className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${source.color} bg-opacity-10`}>
              <source.icon className={`h-5 w-5 ${source.color.replace('bg-', 'text-')}`} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium dark:text-white">{source.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{source.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`${source.color} h-2 rounded-full`}
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}