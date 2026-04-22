'use client';

import { useEffect, useState } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="page-hero-v2">
      <div className="page-hero-v2__grid" aria-hidden="true" />
      <div className="page-hero-v2-inner">
        <p className={`page-hero-v2__eyebrow rv ${revealed ? 'in' : ''}`}>
          {eyebrow}
        </p>

        <h1 className={`page-hero-v2-title char-reveal ${revealed ? 'in' : ''}`}>
          {Array.from(title).map((char, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${0.2 + i * 0.05}s` }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </h1>

        <p
          className={`page-hero-v2-subtitle rv rv-d4 ${revealed ? 'in' : ''}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div
          className={`page-hero-v2__meta rv rv-d5 ${revealed ? 'in' : ''}`}
          aria-hidden="true"
        >
          <span className="page-hero-v2__meta-line" />
          <span className="page-hero-v2__meta-label">union — 現場の隣で、共に</span>
        </div>
      </div>
    </section>
  );
}
