import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Website {
  id: string;
  url: string;
  color: string;
}

const WEBSITE_COLORS = {
  primary: '#0052CC',
  competitor1: '#FFB800',
  competitor2: '#36B37E',
  competitor3: '#6554C0',
};

export function UrlInputSection() {
  const [websites, setWebsites] = React.useState<Website[]>([
    { id: '1', url: '', color: WEBSITE_COLORS.primary },
  ]);

  const addWebsite = () => {
    if (websites.length >= 4) return;
    const colorKeys = Object.keys(WEBSITE_COLORS);
    const newColor = WEBSITE_COLORS[colorKeys[websites.length] as keyof typeof WEBSITE_COLORS];
    setWebsites([...websites, { id: Date.now().toString(), url: '', color: newColor }]);
  };

  const removeWebsite = (id: string) => {
    if (websites.length <= 1) return;
    setWebsites(websites.filter(site => site.id !== id));
  };

  const updateUrl = (id: string, url: string) => {
    setWebsites(websites.map(site => 
      site.id === id ? { ...site, url } : site
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="space-y-4">
        <AnimatePresence>
          {websites.map((website) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: website.color }}
              />
              <input
                type="url"
                placeholder="Enter website URL (e.g., https://example.com)"
                value={website.url}
                onChange={(e) => updateUrl(website.id, e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                          focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
              />
              {websites.length > 1 && (
                <button
                  onClick={() => removeWebsite(website.id)}
                  className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                >
                  <Minus className="h-5 w-5" />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {websites.length < 4 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addWebsite}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400
                     hover:text-blue-700 dark:hover:text-blue-300"
          >
            <Plus className="h-4 w-4" />
            Add Website
          </motion.button>
        )}
      </div>
    </div>
  );
}