export default function FlowLines({ intensity = 1 }) {
  const bars = Math.max(1, Math.min(8, Math.ceil(intensity)));

  return (
    <div>
      <div className="label">River → Coast Flow (derived from NOAA water level)</div>
      {Array.from({ length: bars }).map((_, i) => (
        <div key={i} className="flow-line" />
      ))}
    </div>
  );
}
