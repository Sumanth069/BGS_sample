import GlassCard from '../UI/GlassCard';

export default function Alerts({ alerts = [], riskLevel = 'low' }) {
  const topAlert = alerts[0];

  return (
    <GlassCard title="Active Alerts">
      <div className={`badge ${riskLevel}`}>{riskLevel.toUpperCase()} RISK</div>
      {topAlert ? (
        <p style={{ marginBottom: 0 }}>
          {topAlert.properties?.event}: {topAlert.properties?.headline || topAlert.properties?.description}
        </p>
      ) : (
        <p style={{ marginBottom: 0 }}>No active marine/coastal alert events in the latest NWS feed.</p>
      )}
    </GlassCard>
  );
}
