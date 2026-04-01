import GlassCard from '../UI/GlassCard';
import FlowLines from './FlowLines';
import Hotspots from './Hotspots';

export default function MapView() {
  return (
    <GlassCard title="Live Waste Flow Map">
      <p style={{ marginTop: 0 }}>Prototype map pane for GeoJSON rivers, hotspot markers, and animated flow paths.</p>
      <div style={{ height: 220, borderRadius: 12, border: '1px dashed #0ea5e9', display: 'grid', placeItems: 'center', background: 'rgba(8,47,73,.25)' }}>
        Leaflet map canvas placeholder
      </div>
      <div className="stack" style={{ marginTop: '1rem' }}>
        <FlowLines intensity={3} />
        <Hotspots />
      </div>
    </GlassCard>
  );
}
