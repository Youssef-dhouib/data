import React from 'react';
import { ComparisonHeader } from '../components/comparison/ComparisonHeader';
import { UrlInputSection } from '../components/comparison/UrlInputSection';
import { ComparisonMetrics } from '../components/comparison/ComparisonMetrics';
import { WebsiteMetrics } from '../components/comparison/WebsiteMetrics';
import { TimeframeSelector } from '../components/TimeframeSelector';
import { WorldMap } from '../components/WorldMap';
import { useDarkMode } from '../hooks/useDarkMode';

export function ComparePage() {
  const [timeframe, setTimeframe] = React.useState('This Year');
  const [isDark] = useDarkMode();

  // Sample data - in a real app, this would come from your backend
  const websites = [
    {
      url: 'https://example1.com',
      color: '#0052CC',
      seoScore: 92,
      conversionRate: 3.5,
      bestSeller: 'Wireless Earbuds',
      googleRank: 1,
      loadingTime: '1.2s',
      timeSpent: '4:30',
      platform: 'Shopify'
    },
    {
      url: 'https://example2.com',
      color: '#FFB800',
      seoScore: 88,
      conversionRate: 2.8,
      bestSeller: 'Smart Watch',
      googleRank: 3,
      loadingTime: '1.8s',
      timeSpent: '3:45',
      platform: 'WooCommerce'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <ComparisonHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <UrlInputSection />
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold dark:text-white">Comparison Metrics</h2>
          <TimeframeSelector
            options={['Today', 'This Week', 'This Month', 'This Year']}
            selected={timeframe}
            onChange={setTimeframe}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <ComparisonMetrics
            type="traffic"
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: websites.map(site => ({
                label: new URL(site.url).hostname,
                data: [65, 59, 80, 81, 56, 55],
                borderColor: site.color,
                backgroundColor: `${site.color}20`,
              })),
            }}
          />
          
          <ComparisonMetrics
            type="sales"
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: websites.map(site => ({
                label: new URL(site.url).hostname,
                data: [28, 48, 40, 19, 86, 27],
                borderColor: site.color,
                backgroundColor: `${site.color}20`,
              })),
            }}
          />
        </div>

        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4 dark:text-white">Audience Distribution</h3>
            <WorldMap isDark={isDark} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {websites.map((website) => (
            <WebsiteMetrics key={website.url} {...website} />
          ))}
        </div>
      </main>
    </div>
  );
}