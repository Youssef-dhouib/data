import { CheerioAPI } from 'cheerio';

export function detectPlatform($: CheerioAPI): string {
  // Shopify detection
  if ($('link[href*="shopify"]').length > 0 || $('script[src*="shopify"]').length > 0) {
    return 'Shopify';
  }
  
  // WooCommerce detection
  if ($('link[href*="wp-content"]').length > 0 || $('script[src*="wp-content"]').length > 0) {
    return 'WooCommerce';
  }
  
  // Wix detection
  if ($('meta[name="generator"][content*="Wix"]').length > 0) {
    return 'Wix';
  }
  
  // Add more platform detection logic here
  
  return 'Custom Platform';
}