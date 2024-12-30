import { CheerioAPI } from 'cheerio';

export function calculateSEOScore($: CheerioAPI): number {
  let score = 0;
  const maxScore = 100;
  
  // Check title
  if ($('title').length > 0) score += 10;
  
  // Check meta description
  if ($('meta[name="description"]').length > 0) score += 10;
  
  // Check heading structure
  if ($('h1').length > 0) score += 10;
  if ($('h2').length > 0) score += 5;
  
  // Check image alt tags
  const images = $('img');
  const imagesWithAlt = $('img[alt]');
  if (images.length > 0 && imagesWithAlt.length === images.length) score += 10;
  
  // Check for responsive design
  if ($('meta[name="viewport"]').length > 0) score += 10;
  
  // Check for sitemap
  if ($('link[href*="sitemap"]').length > 0) score += 5;
  
  // Check for robots.txt
  if ($('meta[name="robots"]').length > 0) score += 5;
  
  // Add more SEO checks here
  
  return Math.min(score, maxScore);
}