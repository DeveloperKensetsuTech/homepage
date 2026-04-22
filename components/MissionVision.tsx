'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  {
    label: 'Mission',
    title: 'シンプルなものを、現場の当たり前に',
    text: 'シンプルな機能、シンプルなデザイン。ITに詳しくなくても迷わず使える。そんな「当たり前に使えるツール」を現場に届けることが、私たちの使命です。',
  },
  {
    label: 'Vision',
    title: '雑務を減らす。誇りを増やす。',
    text: '建設・福祉をはじめ、現場で汗を流す人たちにこそ、テクノロジーの恩恵を届けたい。小さなアプリから始めて、気づけば業務が変わっている。そんな現場発のDXを、本気で広めていきます。',
  },
];

export default function MissionVision() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal();

  return (
    <section className="philosophy">
      <div
        ref={headRef}
        className={`section-head section-head--dark philosophy__head rv ${headVisible ? 'in' : ''}`}
      >
        <div>
          <p className="section-head__eyebrow">Philosophy — 哲学</p>
          <h2 className="section-head__title">現場の当たり前を、塗り替える</h2>
        </div>
        <p className="section-head__lede">
          ミッションとビジョン。
          unionが何のために生まれ、どこへ向かっていくのか。
          現場に立つすべての人と共有したい、私たちの軸です。
        </p>
      </div>

      <div ref={listRef} className="philosophy__grid">
        {items.map((it, i) => (
          <article
            key={it.label}
            className={`philosophy__item rv rv-d${i + 1} ${listVisible ? 'in' : ''}`}
          >
            <div className="philosophy__mark" />
            <p className="philosophy__label">{it.label}</p>
            <h3 className="philosophy__title">{it.title}</h3>
            <p className="philosophy__text">{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
