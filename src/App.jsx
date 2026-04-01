import { useState } from 'react';
import Navbar from './components/UI/Navbar';
import Sidebar from './components/UI/Sidebar';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import Simulation from './pages/Simulation';

const pages = {
  dashboard: Dashboard,
  report: Report,
  simulation: Simulation,
};

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const ActiveComponent = pages[activePage];

  return (
    <div className="app-shell">
      <div className="background-glow" />
      <Navbar />
      <div className="layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}
