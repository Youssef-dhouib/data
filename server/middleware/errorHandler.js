export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  if (err.message === 'CORS policy violation') {
    return res.status(403).json({
      error: 'Not allowed by CORS'
    });
  }
  
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
};