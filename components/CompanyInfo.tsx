'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const companyData: { label: string; value: string }[] = [
  { label: '会社名', value: '株式会社main character' },
  { label: 'ブランド名', value: 'union' },
  { label: '代表者', value: '代表取締役　北島壮馬' },
  { label: '設立', value: '2025年6月' },
  {
    label: '所在地',
    value: '〒814-0001<br />福岡県福岡市早良区百道2-15-1',
  },
];

const businessItems = [
  '現場特化SaaSプロダクトの企画・開発・運営',
  '建設・福祉など現場業務のデジタル化支援',
];

export default function CompanyInfo() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();
  const { ref: gridRef, isVisible } = useScrollReveal(0.05);

  return (
    <section className="company-info">
      <div
        ref={headRef}
        className={`company-info__head rv ${headVisible ? 'in' : ''}`}
      >
        <p className="section-head__eyebrow">Company Information — 会社情報</p>
      </div>

      <div
        ref={gridRef}
        className={`company-info__grid rv rv-d1 ${isVisible ? 'in' : ''}`}
      >
        <div className="company-info__block">
          <p className="company-info__block-label">Profile</p>
          <dl className="company-info__list">
            {companyData.map((item) => (
              <div key={item.label} className="company-info__row">
                <dt>{item.label}</dt>
                <dd dangerouslySetInnerHTML={{ __html: item.value }} />
              </div>
            ))}
          </dl>
        </div>

        <div className="company-info__block">
          <p className="company-info__block-label">Business</p>
          <ul className="company-info__business">
            {businessItems.map((item) => (
              <li key={item}>
                <span className="company-info__bullet" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
