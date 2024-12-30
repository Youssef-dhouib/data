import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
const REQUESTS_PER_MINUTE = 60;

export const rateLimiter = (req, res, next) => {
  const clientIP = req.ip;
  const key = `${clientIP}-${req.url}`;
  
  let requests = cache.get(key) || 0;
  
  if (requests >= REQUESTS_PER_MINUTE) {
    return res.status(429).json({
      error: 'Too many requests, please try again later.'
    });
  }
  
  cache.set(key, requests + 1, 60); // Reset after 1 minute
  next();
};