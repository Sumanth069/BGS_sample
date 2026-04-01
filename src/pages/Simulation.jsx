import { useState } from 'react';
import GlassCard from '../components/UI/GlassCard';

export default function Simulation() {
  const [restored, setRestored] = useState(false);

  return (
    <GlassCard title="Future Simulation Engine">
      <p>Toggle impact simulation to show “if no action” vs “if action”.</p>
      <button className="primary" onClick={() => setRestored((v) => !v)}>
        {restored ? 'Show Risk Scenario' : 'Show Recovery Scenario'}
      </button>
      <div
        style={{
          marginTop: '1rem',
          height: 260,
          borderRadius: 12,
          border: '1px solid rgba(125,211,252,.3)',
          background: restored
            ? 'linear-gradient(160deg, rgba(6,182,212,.45), rgba(20,83,45,.45))'
            : 'linear-gradient(160deg, rgba(239,68,68,.45), rgba(127,29,29,.45))',
          display: 'grid',
          placeItems: 'center',
          fontSize: '1.2rem',
          fontWeight: 700,
        }}
      >
        {restored ? 'After Action: Ecosystem Recovery' : 'Before Action: Expanding Marine Dead Zones'}
      </div>
    </GlassCard>
  );
}
