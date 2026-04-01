const hotspots = [
  { name: 'Mithi River Mouth', severity: 'high' },
  { name: 'Adyar Estuary', severity: 'medium' },
  { name: 'Mandovi Bank', severity: 'low' },
];

export default function Hotspots() {
  return (
    <div>
      <div className="label">Waste Hotspots</div>
      <ul>
        {hotspots.map((spot) => (
          <li key={spot.name} style={{ marginBottom: '.4rem' }}>
            {spot.name} <span className={`badge ${spot.severity}`}>{spot.severity.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
