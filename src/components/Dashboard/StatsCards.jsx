import GlassCard from '../UI/GlassCard';

const stats = [
  ['Active Hotspots', 12],
  ['Citizen Reports', 84],
  ['Plastic Diverted (kg)', 540],
];

export default function StatsCards() {
  return (
    <div className="stack">
      {stats.map(([label, value]) => (
        <GlassCard key={label}>
          <div className="label">{label}</div>
          <div className="metric">{value}</div>
        </GlassCard>
      ))}
    </div>
  );
}
