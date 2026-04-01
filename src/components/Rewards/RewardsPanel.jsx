import GlassCard from '../UI/GlassCard';
import { calculatePoints } from '../../utils/rewardCalc';

export default function RewardsPanel() {
  const collected = 32;
  const points = calculatePoints(collected);

  return (
    <GlassCard title="Rewards">
      <p>Waste collected this week: <strong>{collected} kg</strong></p>
      <p className="metric">{points} points</p>
    </GlassCard>
  );
}
