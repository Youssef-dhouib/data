import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  increase: number;
}

export function StatsCard({ icon, label, value, increase }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <div className="flex items-center text-green-500 text-sm">
          <ArrowUpRight className="h-4 w-4" />
          <span>+{increase}%</span>
        </div>
      </div>
    </div>
  );
}