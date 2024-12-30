import { api } from './api';

export interface WebsiteData {
  url: string;
  platform: string;
  seoScore: number;
  loadingTime: string;
  bestSeller?: string;
  googleRank: number;
  conversionRate: number;
  timeSpent: string;
  analytics?: any;
}

export async function analyzeWebsite(url: string): Promise<WebsiteData> {
  try {
    const response = await api.post('/analyze', { url });
    return response.data;
  } catch (error) {
    throw new Error('Failed to analyze website');
  }
}