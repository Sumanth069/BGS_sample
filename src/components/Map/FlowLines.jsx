export default function FlowLines({ intensity = 1 }) {
  return (
    <div>
      <div className="label">River → Coast Flow</div>
      {Array.from({ length: Math.max(1, Math.ceil(intensity)) }).map((_, i) => (
        <div key={i} className="flow-line" />
      ))}
    </div>
  );
}
