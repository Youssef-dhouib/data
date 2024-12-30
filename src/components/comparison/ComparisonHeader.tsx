import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import { useDarkMode } from '../../hooks/useDarkMode';

export function ComparisonHeader() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Website Comparison</h1>
          </div>
          <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </div>
      </div>
    </header>
  );
}