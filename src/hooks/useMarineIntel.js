import { useEffect, useMemo, useState } from 'react';
import { fetchNoaaWaterLevel, fetchNwsMarineAlerts, fetchNwsPrecipitationForecast } from '../services/noaa';
import { calculateRisk, riskBand } from '../utils/prediction';

const DEFAULT_COORDS = { lat: 37.7749, lon: -122.4194 };

export default function useMarineIntel() {
  const [coords, setCoords] = useState(DEFAULT_COORDS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [waterLevel, setWaterLevel] = useState(null);
  const [rainfall, setRainfall] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const geolocation = navigator?.geolocation;
    if (!geolocation) return;

    geolocation.getCurrentPosition(
      ({ coords: geocoords }) => {
        setCoords({ lat: geocoords.latitude, lon: geocoords.longitude });
      },
      () => {},
      { enableHighAccuracy: true, timeout: 5000 },
    );
  }, []);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError('');
      try {
        const [alertsPayload, waterPayload, precipitationPayload] = await Promise.all([
          fetchNwsMarineAlerts(),
          fetchNoaaWaterLevel(),
          fetchNwsPrecipitationForecast(coords.lat, coords.lon),
        ]);

        if (!mounted) return;
        setAlerts(alertsPayload.features);
        setWaterLevel(waterPayload);
        setRainfall(precipitationPayload.avgPrecipitation);
        setLastUpdated(new Date().toISOString());
      } catch (err) {
        if (!mounted) return;
        setError(err.message || 'Failed to load marine intelligence data');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [coords.lat, coords.lon]);

  const computed = useMemo(() => {
    const alertFactor = Math.min(10, alerts.length);
    const rainfallFactor = Math.max(1, Math.round((rainfall || 0) / 10));
    const flowFactor = Math.max(1, Math.round(Math.abs(waterLevel?.latest?.value || 1) * 3));
    const riskScore = calculateRisk(alertFactor, rainfallFactor, flowFactor);

    return {
      riskScore,
      riskLevel: riskBand(riskScore),
      alertFactor,
      rainfallFactor,
      flowFactor,
    };
  }, [alerts.length, rainfall, waterLevel?.latest?.value]);

  return {
    loading,
    error,
    coords,
    alerts,
    waterLevel,
    rainfall,
    lastUpdated,
    ...computed,
  };
}
