function severityFromEvent(event = '') {
  if (/hurricane|storm|extreme|emergency/i.test(event)) return 'high';
  if (/flood|wind|surge|advisory/i.test(event)) return 'medium';
  return 'low';
}

export default function Hotspots({ alerts = [] }) {
  const hotspots = alerts.slice(0, 5).map((alert) => ({
    name: alert?.properties?.areaDesc?.split(';')[0] || 'Unnamed zone',
    severity: severityFromEvent(alert?.properties?.event),
    event: alert?.properties?.event || 'Marine Alert',
  }));

  return (
    <div>
      <div className="label">Active GIS Alert Zones</div>
      {hotspots.length === 0 ? (
        <p style={{ margin: 0, opacity: 0.8 }}>No active marine/coastal alerts currently returned by NWS feed.</p>
      ) : (
        <ul>
          {hotspots.map((spot) => (
            <li key={`${spot.name}-${spot.event}`} style={{ marginBottom: '.4rem' }}>
              {spot.name} <span className={`badge ${spot.severity}`}>{spot.severity.toUpperCase()}</span>
              <div style={{ fontSize: '.85rem', opacity: 0.85 }}>{spot.event}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
