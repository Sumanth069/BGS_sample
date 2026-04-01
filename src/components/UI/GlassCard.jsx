export default function GlassCard({ title, children, className = '' }) {
  return (
    <section className={`glass-card ${className}`.trim()}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </section>
  );
}
