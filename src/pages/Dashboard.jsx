import MapView from '../components/Map/MapView';
import PredictionPanel from '../components/Dashboard/PredictionPanel';
import StatsCards from '../components/Dashboard/StatsCards';
import Alerts from '../components/Dashboard/Alerts';
import SystemStatus from '../components/Dashboard/SystemStatus';
import useMarineIntel from '../hooks/useMarineIntel';

export default function Dashboard() {
  const intel = useMarineIntel();

  return (
    <div className="grid-2">
      <div className="stack">
        <MapView intel={intel} />
        <Alerts alerts={intel.alerts} riskLevel={intel.riskLevel} />
      </div>
      <div className="stack">
        <PredictionPanel intel={intel} />
        <StatsCards intel={intel} />
        <SystemStatus intel={intel} />
      </div>
    </div>
  );
}
