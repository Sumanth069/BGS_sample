const NOAA_BASE = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter';

export async function fetchNoaaWaterLevel(station = '9414290') {
  const now = new Date();
  const begin = new Date(now.getTime() - 6 * 60 * 60 * 1000);
  const end = new Date(now.getTime() + 6 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    product: 'water_level',
    application: 'samudra_sutra',
    begin_date: formatDate(begin),
    end_date: formatDate(end),
    datum: 'MLLW',
    station,
    time_zone: 'gmt',
    units: 'metric',
    format: 'json',
  });

  const response = await fetch(`${NOAA_BASE}?${params.toString()}`);
  if (!response.ok) throw new Error(`NOAA water level request failed (${response.status})`);

  const payload = await response.json();
  const rows = (payload?.data || []).map((row) => ({
    time: row.t,
    value: Number(row.v),
  })).filter((row) => Number.isFinite(row.value));

  return {
    station,
    latest: rows.at(-1) ?? null,
    series: rows,
  };
}

export async function fetchNwsMarineAlerts() {
  const response = await fetch('https://api.weather.gov/alerts/active?status=actual&message_type=alert');
  if (!response.ok) throw new Error(`NWS alerts request failed (${response.status})`);

  const payload = await response.json();
  const features = (payload?.features || []).filter((feature) => {
    const event = feature?.properties?.event || '';
    const area = feature?.properties?.areaDesc || '';
    return /marine|coast|flood|surf|storm|hurricane|tropical/i.test(`${event} ${area}`);
  });

  return {
    fetchedAt: new Date().toISOString(),
    features,
  };
}

export async function fetchNwsPrecipitationForecast(lat, lon) {
  const pointsResponse = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  if (!pointsResponse.ok) throw new Error(`NWS points request failed (${pointsResponse.status})`);

  const points = await pointsResponse.json();
  const hourlyUrl = points?.properties?.forecastHourly;
  if (!hourlyUrl) throw new Error('NWS hourly forecast URL missing');

  const forecastResponse = await fetch(hourlyUrl);
  if (!forecastResponse.ok) throw new Error(`NWS hourly forecast failed (${forecastResponse.status})`);

  const forecast = await forecastResponse.json();
  const periods = forecast?.properties?.periods || [];

  const next24h = periods.slice(0, 24);
  const precipitation = next24h
    .map((period) => Number(period?.probabilityOfPrecipitation?.value || 0))
    .filter((value) => Number.isFinite(value));

  const avgPrecipitation = precipitation.length
    ? precipitation.reduce((sum, value) => sum + value, 0) / precipitation.length
    : 0;

  return {
    avgPrecipitation,
    periods: next24h,
  };
}

function formatDate(date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const hh = String(date.getUTCHours()).padStart(2, '0');
  const min = String(date.getUTCMinutes()).padStart(2, '0');
  return `${yyyy}${mm}${dd} ${hh}:${min}`;
}
