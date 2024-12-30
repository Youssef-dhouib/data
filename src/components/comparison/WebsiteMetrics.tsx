import React from 'react';
import { Globe, Clock, Star, ShoppingBag, Gauge, ArrowUpRight } from 'lucide-react';

interface WebsiteMetricsProps {
  color: string;
  url: string;
  seoScore: number;
  conversionRate: number;
  bestSeller: string;
  googleRank: number;
  loadingTime: string;
  timeSpent: string;
  platform: string;
}

export function WebsiteMetrics({
  color,
  url,
  seoScore,
  conversionRate,
  bestSeller,
  googleRank,
  loadingTime,
  timeSpent,
  platform
}: WebsiteMetricsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-t-4" style={{ borderColor: color }}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg dark:text-white">{new URL(url).hostname}</h3>
          <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: color, color: '#fff' }}>
            {platform}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Star className="h-4 w-4" />
              <span>SEO Score</span>
            </div>
            <div className="text-2xl font-bold dark:text-white">{seoScore}%</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <ArrowUpRight className="h-4 w-4" />
              <span>Conversion</span>
            </div>
            <div className="text-2xl font-bold dark:text-white">{conversionRate}%</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <ShoppingBag className="h-4 w-4" />
              <span>Best Seller</span>
            </div>
            <div className="text-sm font-medium dark:text-white">{bestSeller}</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Globe className="h-4 w-4" />
              <span>Google Rank</span>
            </div>
            <div className="text-2xl font-bold dark:text-white">#{googleRank}</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Gauge className="h-4 w-4" />
              <span>Load Time</span>
            </div>
            <div className="text-2xl font-bold dark:text-white">{loadingTime}</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Avg. Time</span>
            </div>
            <div className="text-2xl font-bold dark:text-white">{timeSpent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}