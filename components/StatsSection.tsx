export default function StatsSection() {
  const stats = [
    { number: '7', unit: '社', label: '導入企業数' },
    { number: '20', unit: 'h', label: '月間業務効率化時間' },
    { number: '24', unit: 'h', label: 'サポート対応' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">
                {stat.number}<span className="stat-unit">{stat.unit}</span>
              </span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
