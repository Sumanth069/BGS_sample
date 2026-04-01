import UploadForm from '../components/Reporting/UploadForm';
import RewardsPanel from '../components/Rewards/RewardsPanel';
import Leaderboard from '../components/Rewards/Leaderboard';

export default function Report() {
  return (
    <div className="grid-2">
      <UploadForm />
      <div className="stack">
        <RewardsPanel />
        <Leaderboard />
      </div>
    </div>
  );
}
