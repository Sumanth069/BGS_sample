import MapView from '../components/Map/MapView';
import PredictionPanel from '../components/Dashboard/PredictionPanel';
import StatsCards from '../components/Dashboard/StatsCards';
import Alerts from '../components/Dashboard/Alerts';

export default function Dashboard() {
  return (
    <div className="grid-2">
      <div className="stack">
        <MapView />
        <Alerts />
      </div>
      <div className="stack">
        <PredictionPanel />
        <StatsCards />
      </div>
    </div>
  );
}
