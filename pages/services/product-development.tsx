import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export default function ProductDevelopment() {
  const features = [
    {
      number: '01',
      title: '要件定義・設計',
      description: '現場の声をヒアリングし、本当に必要な機能を洗い出します。使いやすさを最優先に設計します。'
    },
    {
      number: '02',
      title: '開発・テスト',
      description: 'アジャイル開発で段階的にリリース。現場からのフィードバックを反映しながら進めます。'
    },
    {
      number: '03',
      title: '運用・保守',
      description: 'リリース後も継続的にサポート。機能追加や改善要望にも柔軟に対応します。'
    }
  ];

  const cases = [
    {
      company: '株式会社成木',
      industry: '設備工事業',
      challenge: '複数現場の進捗管理がExcelで煩雑だった',
      solution: 'カスタム進捗管理アプリを開発',
      result: '全現場の状況を一元管理、報告作業を80%削減'
    },
    {
      company: '株式会社櫻建',
      industry: '総合建設業',
      challenge: '協力会社との書類やりとりに手間がかかっていた',
      solution: '電子書類管理システムを構築',
      result: 'ペーパーレス化を実現、承認フローを効率化'
    }
  ];

  return (
    <>
      <Head>
        <title>プロダクト開発 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業に特化したカスタムアプリケーションの開発。現場の声を反映した使いやすいシステムを構築します。"
        />
      </Head>

      <Header />
      <PageHero
        title="プロダクト開発"
        subtitle="建設業に特化したカスタムアプリケーションで<br />現場の課題を解決します"
      />

      <main>
        {/* サービス概要 */}
        <section className="section">
          <div className="service-detail-intro">
            <p>
              「既存のツールでは業務に合わない」「もっと使いやすいシステムがほしい」
              そんなお悩みを解決します。建設業の現場を熟知したエンジニアが、
              御社専用のアプリケーションを開発します。
            </p>
          </div>
        </section>

        {/* 特徴 */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="section-header">
            <p className="section-label">Process</p>
            <h2 className="section-title">開発の流れ</h2>
          </div>
          <div className="features-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
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

        {/* 導入事例 */}
        <section className="section">
          <div className="section-header">
            <p className="section-label">Case Studies</p>
            <h2 className="section-title">導入事例</h2>
          </div>
          <div className="case-studies-grid">
            {cases.map((caseItem, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-header">
                  <h3>{caseItem.company}</h3>
                  <span className="case-study-industry">{caseItem.industry}</span>
                </div>
                <div className="case-study-content">
                  <div className="case-study-item">
                    <span className="case-study-label">課題</span>
                    <p>{caseItem.challenge}</p>
                  </div>
                  <div className="case-study-item">
                    <span className="case-study-label">施策</span>
                    <p>{caseItem.solution}</p>
                  </div>
                  <div className="case-study-item">
                    <span className="case-study-label">成果</span>
                    <p className="case-study-result">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
