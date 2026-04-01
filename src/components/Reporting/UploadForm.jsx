import { useState } from 'react';
import GlassCard from '../UI/GlassCard';
import ImagePreview from './ImagePreview';
import { formatCoordinates } from '../../utils/geoUtils';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState('');

  const detectLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation(formatCoordinates(coords.latitude, coords.longitude));
    });
  };

  return (
    <GlassCard title="Waste Reporting">
      <div className="stack">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <ImagePreview file={file} />
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Lat, Lng" />
        <button className="primary" onClick={detectLocation}>Use current location</button>
        <button className="primary">Submit to Supabase (stub)</button>
      </div>
    </GlassCard>
  );
}
