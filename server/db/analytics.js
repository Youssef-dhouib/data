import { getSupabase } from './supabase.js';

export async function saveAnalytics(data) {
  const supabase = getSupabase();
  
  const { error } = await supabase
    .from('website_analytics')
    .insert([{
      url: data.url,
      metrics: data.metrics,
      seo: data.seo,
      analytics: data.analytics,
      created_at: new Date().toISOString()
    }]);

  if (error) {
    console.error('Error saving analytics:', error);
    throw error;
  }
}