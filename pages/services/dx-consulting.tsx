import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export default function DXConsulting() {
  const features = [
    {
      number: '01',
      title: '現状分析・課題抽出',
      description: '現場へのヒアリングと業務フロー分析により、デジタル化すべき課題を明確にします。'
    },
    {
      number: '02',
      title: '戦略立案・ロードマップ作成',
      description: '投資対効果を考慮した最適なDX戦略と、段階的な導入計画を策定します。'
    },
    {
      number: '03',
      title: '導入支援・定着化サポート',
      description: 'ツールの選定から導入、社員教育まで一貫してサポートし、確実な定着を実現します。'
    }
  ];

  const cases = [
    {
      company: '株式会社A',
      industry: '土木工事業',
      challenge: '紙ベースの日報管理で集計に時間がかかっていた',
      solution: 'デジタル日報システムの導入とワークフロー改善',
      result: '月間20時間の業務削減を実現'
    },
    {
      company: '株式会社B',
      industry: '建築工事業',
      challenge: '現場と事務所の情報共有に遅延が発生',
      solution: 'クラウド型の情報共有基盤を構築',
      result: 'リアルタイムでの進捗把握が可能に'
    }
  ];

  return (
    <>
      <Head>
        <title>DXコンサルティング | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界の業務課題を分析し、最適なデジタル化戦略を立案。現状分析から導入支援まで一貫してサポートします。"
        />
      </Head>

      <Header />
      <PageHero
        title="DXコンサルティング"
        subtitle="建設業界の業務課題を分析し、<br />最適なデジタル化戦略を立案します"
      />

      <main>
        {/* サービス概要 */}
        <section className="section">
          <div className="service-detail-intro">
            <p>
              建設業界に精通したコンサルタントが、御社の業務課題を深く理解し、
              最適なDX戦略をご提案します。「何から始めればいいかわからない」
              「導入しても定着しない」といったお悩みを解決します。
            </p>
          </div>
        </section>

        {/* 特徴 */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="section-header">
            <p className="section-label">Process</p>
            <h2 className="section-title">支援の流れ</h2>
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
