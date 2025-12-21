import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'DXコンサルティング',
      description: '建設業界の業務課題を分析し、最適なデジタル化戦略を立案。現状分析から導入支援まで一貫してサポートします。',
      href: '/services/dx-consulting'
    },
    {
      number: '02',
      title: 'プロダクト開発',
      description: '建設業に特化したカスタムアプリケーションの開発。現場の声を反映した使いやすいシステムを構築します。',
      href: '/services/product-development'
    }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <p className="section-label">Services</p>
        <h2 className="section-title">サービス</h2>
      </div>
      <div className="services-grid services-grid-2">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="service-card-simple">
            <div className="service-card-number">{service.number}</div>
            <div className="service-card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">
                詳しく見る <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
