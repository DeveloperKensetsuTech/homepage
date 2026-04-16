'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const products = [
    { slug: 'scaffold', nameLine1: 'union 発注', nameLine2: 'for 足場', comingSoon: false, icon: '/images/icon-shizai.png' },
    { slug: 'lease', nameLine1: 'union 発注', nameLine2: 'for リース', comingSoon: false, icon: '/images/icon-shizai.png' },
    { slug: 'care', nameLine1: 'union 介護記録', comingSoon: true },
    { slug: 'daily-report', nameLine1: 'union 日報', comingSoon: true },
    { slug: 'attendance', nameLine1: 'union 勤怠管理', comingSoon: true },
  ];

  // マーキー用に2倍にして無限ループを実現
  const doubledProducts = [...products, ...products];

  return (
    <section className="section">
      <div className="section-header" ref={headerRef}>
        <p className={`section-label reveal stagger-1 ${headerVisible ? 'visible' : ''}`}>Products</p>
        <h2 className={`section-title reveal stagger-2 ${headerVisible ? 'visible' : ''}`}>プロダクト</h2>
      </div>
      <div className="products-overview" ref={contentRef}>
        <div className={`products-description reveal stagger-1 ${contentVisible ? 'visible' : ''}`}>
          <Link href="/services" className="products-description-link">
            <h3>
              unionプロダクトシリーズ
              <span className="products-description-arrow" aria-hidden="true">→</span>
            </h3>
            <p>
              現場の課題に特化したSaaSプロダクトをラインナップで提供。<br className="pc-only" />
              現場の声から生まれたツールで、日々の業務をシンプルにします。
            </p>
          </Link>
        </div>
        <div className={`product-marquee reveal stagger-2 ${contentVisible ? 'visible' : ''}`}>
          <div className="product-marquee-track">
            {doubledProducts.map((product, index) => (
              <Link
                key={index}
                href={`/services#service-${product.slug}`}
                className={`product-marquee-item ${product.comingSoon ? 'coming-soon' : ''}`}
              >
                {product.icon && (
                  <Image src={product.icon} alt="" width={36} height={36} className="product-marquee-icon" />
                )}
                <span className="product-marquee-name">
                  {product.nameLine1}
                  {product.nameLine2 && <br />}
                  {product.nameLine2 && <span className="product-marquee-name-sub">{product.nameLine2}</span>}
                </span>
                {product.comingSoon && <span className="product-marquee-badge">Coming Soon</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
