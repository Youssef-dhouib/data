import { useState, useEffect } from 'react';
import { analyzeWebsite, WebsiteData } from '../services/websiteAnalyzer';

export function useWebsiteAnalysis(url: string) {
  const [data, setData] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    
    async function analyze() {
      if (!url) return;
      
      try {
        // Validate URL before proceeding
        new URL(url);
      } catch {
        setError('Please enter a valid URL');
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const result = await analyzeWebsite(url);
        if (mounted) {
          setData(result);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to analyze website');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    analyze();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, loading, error };
}