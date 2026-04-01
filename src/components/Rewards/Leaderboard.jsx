import GlassCard from '../UI/GlassCard';

const users = [
  ['Team Konkan', 980],
  ['Blue Guardians', 810],
  ['Marina Watch', 760],
];

export default function Leaderboard() {
  return (
    <GlassCard title="Leaderboard">
      <ol>
        {users.map(([name, points]) => (
          <li key={name}>{name} — {points} pts</li>
        ))}
      </ol>
    </GlassCard>
  );
}
