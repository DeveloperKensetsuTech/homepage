import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          まずはお気軽にご相談ください
        </h2>
        <p className="cta-description">
          建設業界のDX化に関するお悩みやご質問など、<br className="pc-only" />
          お気軽にお問い合わせください。
        </p>
        <Link href="/contact" className="btn-primary">
          無料相談はこちら
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
