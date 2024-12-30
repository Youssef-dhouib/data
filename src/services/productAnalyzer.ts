import { CheerioAPI } from 'cheerio';

export function findBestSeller($: CheerioAPI): string | undefined {
  // Look for common best seller indicators
  const bestSellerSelectors = [
    '.best-seller',
    '[data-bestseller="true"]',
    '.popular-product',
    '.featured-product'
  ];
  
  for (const selector of bestSellerSelectors) {
    const element = $(selector).first();
    if (element.length) {
      const productName = element.find('h2, h3, .product-title').first().text().trim();
      if (productName) return productName;
    }
  }
  
  return undefined;
}