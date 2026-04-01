import GlassCard from '../UI/GlassCard';

export default function PredictionPanel({ intel }) {
  return (
    <GlassCard title="Prediction Panel">
      {intel.loading ? (
        <p>Processing real-time NOAA/NWS data…</p>
      ) : intel.error ? (
        <p style={{ color: '#fca5a5' }}>{intel.error}</p>
      ) : (
        <>
          <p>24–48 hour coastal risk forecast from live hydrological and alert signals.</p>
          <div className="metric">Risk Score: {intel.riskScore}</div>
          <span className={`badge ${intel.riskLevel}`}>{intel.riskLevel.toUpperCase()}</span>
          <p style={{ marginBottom: 0 }}>
            Inputs: alertDensity={intel.alertFactor}, rainfallFactor={intel.rainfallFactor}, flowFactor={intel.flowFactor}
          </p>
        </>
      )}
    </GlassCard>
  );
}
