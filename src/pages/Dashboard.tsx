import React from 'react';
import { Users, DollarSign, MousePointer, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatsCard } from '../components/StatsCard';
import { TimeframeSelector } from '../components/TimeframeSelector';
import { AudienceMap } from '../components/AudienceMap';
import { TrafficSources } from '../components/TrafficSources';
import { ThemeToggle } from '../components/ThemeToggle';
import { AudienceGrowth } from '../components/Charts/AudienceGrowth';
import { WorldMap } from '../components/WorldMap';
import { TopProducts } from '../components/analytics/TopProducts';
import { PlatformInfo } from '../components/analytics/PlatformInfo';
import { DeviceStats } from '../components/analytics/DeviceStats';
import { useDarkMode } from '../hooks/useDarkMode';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [timeframe, setTimeframe] = React.useState('This Year');
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-xl">TrendTide</div>
            </div>
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-8">
                <a href="#" className="bg-yellow-300 dark:bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium">Dashboard</a>
                <Link 
                  to="/compare" 
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                  <span>Compare</span>
                </Link>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Finance</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Reports</a>
              </nav>
              <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-6 mb-8"
        >
          <StatsCard
            icon={<Users className="h-5 w-5" />}
            label="Visitors"
            value="128,420"
            increase={25}
          />
          <StatsCard
            icon={<DollarSign className="h-5 w-5" />}
            label="Sales"
            value="$66,816"
            increase={32}
          />
          <StatsCard
            icon={<MousePointer className="h-5 w-5" />}
            label="Click-through rate (CTR)"
            value="2,420"
            increase={28}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-6 mb-8"
        >
          {/* Audience Growth Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold dark:text-white">Audience Growth</h3>
              <TimeframeSelector
                options={['Today', 'This Week', 'This Year']}
                selected={timeframe}
                onChange={setTimeframe}
              />
            </div>
            <AudienceGrowth />
          </div>

          {/* Traffic Sources */}
          <TrafficSources />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold dark:text-white">Visitor Locations</h3>
            </div>
            <WorldMap />
            <div className="mt-4">
              <AudienceMap countries={[
                { country: 'United States', flag: '🇺🇸', percentage: 50 },
                { country: 'Canada', flag: '🇨🇦', percentage: 20 },
                { country: 'Ukraine', flag: '🇺🇦', percentage: 20 },
                { country: 'Spain', flag: '🇪🇸', percentage: 10 },
                { country: 'United Kingdom', flag: '🇬🇧', percentage: 10 },
              ]} />
            </div>
          </div>
          <TopProducts />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          <PlatformInfo />
          <DeviceStats />
        </motion.div>
      </main>
    </div>
  );
}