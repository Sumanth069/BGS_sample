import GlassCard from './GlassCard';

const links = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'report', label: 'Report Waste' },
  { id: 'simulation', label: 'Simulation' },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <GlassCard title="Navigation">
        {links.map((link) => (
          <button
            key={link.id}
            className={activePage === link.id ? 'active' : ''}
            onClick={() => setActivePage(link.id)}
          >
            {link.label}
          </button>
        ))}
      </GlassCard>
    </aside>
  );
}
