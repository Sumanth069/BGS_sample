import GlassCard from '../UI/GlassCard';

export default function SystemStatus({ intel }) {
  return (
    <GlassCard title="System Status">
      <p style={{ marginTop: 0, marginBottom: '.35rem' }}>
        Feed refresh: every 5 minutes
      </p>
      <p style={{ margin: 0 }}>
        Last refresh: {intel.lastUpdated ? new Date(intel.lastUpdated).toLocaleString() : 'Loading...'}
      </p>
      <p style={{ marginTop: '.35rem', marginBottom: 0 }}>
        NOAA station: {intel.waterLevel?.station || '9414290'}
      </p>
    </GlassCard>
  );
}
