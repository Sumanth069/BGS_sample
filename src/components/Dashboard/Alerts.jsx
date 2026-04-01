import GlassCard from '../UI/GlassCard';

export default function Alerts() {
  return (
    <GlassCard title="Active Alerts">
      <div className="badge high">HIGH RISK</div>
      <p style={{ marginBottom: 0 }}>Mithi River Mouth predicted to impact coastal zone in 36 hours. Triggering local authority escalation.</p>
    </GlassCard>
  );
}
