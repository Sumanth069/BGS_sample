import GlassCard from '../UI/GlassCard';

export default function StatsCards({ intel }) {
  const metrics = [
    ['Active Alert Zones', intel.alerts.length],
    ['NOAA Water Level (m)', intel.waterLevel?.latest?.value?.toFixed?.(2) ?? 'N/A'],
    ['Avg Rain Probability (%)', Math.round(intel.rainfall || 0)],
  ];

  return (
    <div className="stack">
      {metrics.map(([label, value]) => (
        <GlassCard key={label}>
          <div className="label">{label}</div>
          <div className="metric">{value}</div>
        </GlassCard>
      ))}
    </div>
  );
}
