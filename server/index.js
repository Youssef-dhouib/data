import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';
import { rateLimiter } from './middleware/rateLimit.js';
import { errorHandler } from './middleware/errorHandler.js';
import { analyzeWebsite } from './services/analyzer.js';
import { setupSupabase } from './db/supabase.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Apply middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(rateLimiter);

// Initialize Supabase
try {
  setupSupabase();
  console.log('Supabase initialized successfully');
} catch (error) {
  console.error('Failed to initialize Supabase:', error);
  process.exit(1);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Website analysis endpoint
app.post('/api/analyze', async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Validate URL
    try {
      new URL(url);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    const data = await analyzeWebsite(url);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware should be last
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});