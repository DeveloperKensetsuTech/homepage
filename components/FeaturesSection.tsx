export default function FeaturesSection() {
  const features = [
    {
      number: '01',
      title: '建設業界特化',
      description: '建設業界の課題を深く理解し、現場の声に基づいた実践的なDX支援を行います。'
    },
    {
      number: '02',
      title: '投資対効果の可視化',
      description: '導入前にヒアリングを行い、投資対効果を明確に算出。数値で安心をご提供します。'
    },
    {
      number: '03',
      title: '無料ヒアリング',
      description: 'お客様の業務に特化したアプリ開発のため、何度でもヒアリングを無料で実施します。'
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <p className="section-label">Why Choose Us</p>
        <h2 className="section-title">選ばれる理由</h2>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-number">{feature.number}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
