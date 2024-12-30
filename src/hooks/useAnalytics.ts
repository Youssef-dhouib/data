import { useState, useEffect } from 'react';
import { collectAnalytics, AnalyticsData } from '../services/analyticsCollector';

export function useAnalytics(url: string | null) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    let mounted = true;
    
    async function fetchAnalytics() {
      try {
        setLoading(true);
        setError(null);
        
        const analyticsData = await collectAnalytics(url);
        
        if (mounted) {
          setData(analyticsData);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to collect analytics');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchAnalytics();
    
    // Set up periodic refresh
    const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [url]);

  return { data, loading, error };
}