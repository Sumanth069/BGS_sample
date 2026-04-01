# Samudra Sutra — BlueTrace Intelligence Dashboard

Fresh-copy PR build with live marine intelligence feeds (NOAA + NWS) and a conflict-free component layout.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Live data sources

- NOAA Tides & Currents water level API
- National Weather Service (NWS) active alerts GeoJSON
- NWS hourly forecast precipitation probability

## Environment

Optional Supabase values for report persistence:

```bash
cp .env.example .env
```
