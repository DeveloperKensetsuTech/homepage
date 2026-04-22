'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTASection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();
  const { ref: actionRef, isVisible: actionVisible } = useScrollReveal();

  return (
    <section className="cta" id="contact-cta">
      <div className="cta__inner">
        <div ref={headRef} className={`cta__head rv ${headVisible ? 'in' : ''}`}>
          <p className="cta__eyebrow">Contact</p>
          <h2 className="cta__title">
            まずは、現場の課題を
            <br />
            聞かせてください。
          </h2>
          <p className="cta__lede">
            導入のご相談、デモのご希望、取材のご依頼まで。
            小さな「困った」からで結構です、お気軽にお問い合わせください。
          </p>
        </div>

        <div ref={actionRef} className={`cta__aside rv rv-d2 ${actionVisible ? 'in' : ''}`}>
          <Link href="/contact" className="cta__action">
            <span className="cta__action-label">無料相談はこちら</span>
            <svg
              className="cta__action-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
          <p className="cta__mailto">
            または <a href="mailto:info@kensetsu-tech.com">info@kensetsu-tech.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
