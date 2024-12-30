import { WebsiteData } from './websiteAnalyzer';

// Simulated analytics data cache
const analyticsCache = new Map<string, WebsiteData>();

export interface AnalyticsData {
  visitors: number;
  sales: number;
  ctr: number;
  trafficSources: {
    direct: number;
    social: number;
    search: number;
    referral: number;
  };
  locations: {
    country: string;
    visitors: number;
  }[];
  devices: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

export async function collectAnalytics(url: string): Promise<AnalyticsData> {
  // Check cache first
  const cached = analyticsCache.get(url);
  
  // Generate realistic but simulated data
  const baseVisitors = Math.floor(Math.random() * 100000) + 50000;
  const conversionRate = Math.random() * 0.05; // 0-5% conversion rate
  
  const data: AnalyticsData = {
    visitors: baseVisitors,
    sales: Math.floor(baseVisitors * conversionRate),
    ctr: Number((Math.random() * 5 + 1).toFixed(2)),
    trafficSources: {
      direct: Math.floor(Math.random() * 40) + 20,
      social: Math.floor(Math.random() * 30) + 10,
      search: Math.floor(Math.random() * 20) + 20,
      referral: Math.floor(Math.random() * 10) + 10,
    },
    locations: [
      { country: 'United States', visitors: Math.floor(baseVisitors * 0.4) },
      { country: 'United Kingdom', visitors: Math.floor(baseVisitors * 0.2) },
      { country: 'Germany', visitors: Math.floor(baseVisitors * 0.15) },
      { country: 'France', visitors: Math.floor(baseVisitors * 0.1) },
      { country: 'Japan', visitors: Math.floor(baseVisitors * 0.15) },
    ],
    devices: {
      mobile: Math.floor(Math.random() * 20) + 50, // 50-70%
      desktop: Math.floor(Math.random() * 20) + 20, // 20-40%
      tablet: Math.floor(Math.random() * 10) + 5,  // 5-15%
    },
  };

  // Cache the results
  analyticsCache.set(url, cached ? { ...cached, ...data } : data as any);
  
  return data;
}