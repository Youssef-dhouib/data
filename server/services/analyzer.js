import puppeteer from 'puppeteer';
import NodeCache from 'node-cache';
import { saveAnalytics } from '../db/analytics.js';
import axios from 'axios';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

export async function analyzeWebsite(url) {
  try {
    // Check cache first
    const cached = cache.get(url);
    if (cached) {
      return cached;
    }

    // First, fetch the HTML content server-side
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebAnalyzer/1.0;)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set content directly instead of navigating
    await page.setContent(response.data, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Collect metrics
    const metrics = await page.metrics();
    const performance = await page.evaluate(() => performance.timing.toJSON());
    
    // Get SEO data
    const seoData = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      h1Count: document.getElementsByTagName('h1').length,
      imgCount: document.getElementsByTagName('img').length,
      imgWithAlt: Array.from(document.getElementsByTagName('img')).filter(img => img.alt).length,
    }));

    await browser.close();
    
    const data = {
      url,
      metrics: {
        loadTime: `${((Date.now() - performance.navigationStart) / 1000).toFixed(2)}s`,
        jsHeapSize: Math.round(metrics.JSHeapUsedSize / 1024 / 1024),
        domNodes: metrics.Nodes,
      },
      seo: {
        score: calculateSeoScore(seoData),
        ...seoData,
      },
      analytics: generateAnalytics(),
    };
    
    // Save to database
    await saveAnalytics(data);
    
    // Cache the results
    cache.set(url, data);
    
    return data;
  } catch (error) {
    console.error('Analysis error:', error);
    throw new Error(`Analysis failed: ${error.message}`);
  }
}