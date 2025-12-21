export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'メールでのお問い合わせ',
      mainInfo: 'info@kensetsu-tech.com',
      subInfo: '24時間受付・3営業日以内にご返信'
    },
    {
      icon: 'fas fa-clock',
      title: '営業時間',
      mainInfo: '平日 9:00〜18:00',
      subInfo: '土日祝日は休業'
    }
  ];

  return (
    <section className="section">
      <div className="contact-info-grid">
        {contactMethods.map((method, index) => (
          <div key={index} className="contact-info-card">
            <div className="contact-info-icon">
              <i className={method.icon}></i>
            </div>
            <div>
              <h3>{method.title}</h3>
              <p className="contact-info-main">{method.mainInfo}</p>
              <p className="contact-info-sub">{method.subInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
