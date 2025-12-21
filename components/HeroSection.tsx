import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <p className="hero-lead">建設業界特化のDXパートナー</p>
        <h1 className="hero-title">
          建設業界の課題を<br />
          テクノロジーの力で、<br />
          共に解決していく
        </h1>
        <p className="hero-description">
          私たちは建設業に特化したDXアプリの開発運用とDX支援を通じて、<br className="pc-only" />
          建設現場の生産性向上をサポートします。
        </p>
        <div className="hero-cta">
          <Link href="/contact" className="btn-primary">
            無料相談はこちら
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
