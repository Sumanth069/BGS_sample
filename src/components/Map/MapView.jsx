import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import GlassCard from '../UI/GlassCard';
import FlowLines from './FlowLines';
import Hotspots from './Hotspots';

export default function MapView({ intel }) {
  const center = [intel.coords.lat, intel.coords.lon];

  return (
    <GlassCard title="Live Waste Flow Map">
      <p style={{ marginTop: 0 }}>Real-time NOAA + NWS data overlay: marine alerts, risk zones, and local monitoring position.</p>
      <div style={{ height: 320, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(14,165,233,.35)' }}>
        <MapContainer center={center} zoom={7} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>Your monitoring reference position</Popup>
          </Marker>
          {intel.alerts
            .filter((feature) => feature?.geometry)
            .map((feature) => (
              <GeoJSON
                key={feature.id}
                data={feature}
                style={{ color: '#ef4444', weight: 2, fillOpacity: 0.15 }}
              />
            ))}
        </MapContainer>
      </div>
      <div className="stack" style={{ marginTop: '1rem' }}>
        <FlowLines intensity={intel.flowFactor} />
        <Hotspots alerts={intel.alerts} />
      </div>
    </GlassCard>
  );
}
