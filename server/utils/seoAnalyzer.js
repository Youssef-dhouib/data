export function calculateSeoScore(data) {
  let score = 0;
  const maxScore = 100;
  
  // Title checks
  if (data.title) {
    score += 10;
    if (data.title.length >= 30 && data.title.length <= 60) {
      score += 5;
    }
  }
  
  // Meta description
  if (data.description) {
    score += 10;
    if (data.description.length >= 120 && data.description.length <= 160) {
      score += 5;
    }
  }
  
  // Heading structure
  if (data.h1Count === 1) score += 10;
  
  // Image optimization
  if (data.imgCount > 0) {
    const altTextPercentage = (data.imgWithAlt / data.imgCount) * 100;
    score += Math.round((altTextPercentage / 100) * 10);
  }
  
  return Math.min(score, maxScore);
}