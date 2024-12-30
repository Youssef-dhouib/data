import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Loader } from 'lucide-react';
import { useWebsiteAnalysis } from '../../hooks/useWebsiteAnalysis';
import type { WebsiteData } from '../../services/websiteAnalyzer';

interface WebsiteInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: WebsiteData) => void;
}

export function WebsiteInputModal({ isOpen, onClose, onSubmit }: WebsiteInputModalProps) {
  const [url, setUrl] = useState('');
  const { data, loading, error } = useWebsiteAnalysis(url);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data) {
      onSubmit(data);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold dark:text-white">Enter Website URL</h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll analyze your website and provide detailed insights.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !data}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Start Analysis'
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}