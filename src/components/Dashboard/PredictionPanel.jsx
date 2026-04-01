import GlassCard from '../UI/GlassCard';
import { calculateRisk, riskBand } from '../../utils/prediction';

export default function PredictionPanel() {
  const waste = 5;
  const rainfall = 3;
  const flow = 4;
  const score = calculateRisk(waste, rainfall, flow);
  const level = riskBand(score);

  return (
    <GlassCard title="Prediction Panel">
      <p>24–48 hour forecast for downstream marine impact.</p>
      <div className="metric">Risk Score: {score}</div>
      <span className={`badge ${level}`}>{level.toUpperCase()}</span>
      <p style={{ marginBottom: 0 }}>Inputs: waste={waste}, rainfall={rainfall}, flow={flow}</p>
    </GlassCard>
  );
}
