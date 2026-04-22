'use client';

import Link from 'next/link';
import Image from 'next/image';
import FeatureIcon from '@/components/FeatureIcon';
import { products, Product } from '@/lib/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function ShowcaseCard({ sc }: { sc: Product }) {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>();

  return (
    <Link
      href={`/services/${sc.slug}`}
      ref={ref}
      className={`product-showcase rv ${isVisible ? 'in' : ''}`}
    >
      <div className="showcase__body">
        <div className="showcase__brand">
          <Image
            src="/images/icon-shizai.png"
            alt=""
            width={486}
            height={823}
            className="showcase__brand-icon"
          />
          <div className="showcase__brand-text">
            発注<span className="sub">{sc.brandSub}</span>
          </div>
        </div>

        <h3 className="showcase__headline">
          {sc.headlinePre}
          <br />
          {sc.headlineLeadIn}
          <em>{sc.headlineEm}</em>
          {sc.headlinePost}
        </h3>

        <p className="showcase__sub">{sc.sub}</p>

        <div className="showcase__features">
          {sc.features.map((f) => (
            <div key={f.label} className="showcase__feature">
              <span className="showcase__feature-icon" aria-hidden="true">
                <FeatureIcon name={f.icon} />
              </span>
              <span className="showcase__feature-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase__image">
        <Image
          src={sc.image}
          alt={sc.imageAlt}
          fill
          sizes="(max-width: 1100px) 100vw, 600px"
        />
      </div>

      <div className="showcase__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5 L17 12 L9 19" strokeWidth="1.4" />
        </svg>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();

  return (
    <section className="products" id="products">
      <div
        ref={headRef}
        className={`products__head rv ${headVisible ? 'in' : ''}`}
      >
        <div>
          <p className="products__eyebrow">Products</p>
          <h2 className="products__title">プロダクト</h2>
        </div>
        <p className="products__lede">
          現場の課題に特化したSaaSプロダクトをラインナップで提供。
          現場の声から生まれたツールで、日々の業務をシンプルにします。
        </p>
      </div>

      <div className="product-showcases">
        {products.map((sc) => (
          <ShowcaseCard key={sc.slug} sc={sc} />
        ))}
      </div>
    </section>
  );
}
