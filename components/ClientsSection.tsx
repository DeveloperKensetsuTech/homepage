'use client';

export default function ClientsSection() {
  const clients = [
    { name: '株式会社カミノ', logo: '/images/clients/kamino.jpg' },
    { name: '株式会社天翔', logo: '/images/clients/tensho.jpg' },
    { name: '株式会社成木', logo: '/images/clients/naruki.jpg' },
    { name: '株式会社櫻建', logo: '/images/clients/ogp.jpg' },
  ];

  // 無限スクロールのため配列を2倍に
  const doubledClients = [...clients, ...clients];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <p className="clients-title">導入企業</p>
        <div className="clients-marquee">
          <div className="clients-track">
            {doubledClients.map((client, index) => (
              <div key={index} className="client-item">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
