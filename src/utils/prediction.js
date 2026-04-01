export function calculateRisk(waste, rainfall, flow) {
  return waste * rainfall * flow;
}

export function riskBand(score) {
  if (score >= 70) return 'high';
  if (score >= 30) return 'medium';
  return 'low';
}
