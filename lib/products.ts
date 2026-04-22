import type { FeatureIconName } from '@/components/FeatureIcon';

export interface Product {
  slug: string;
  brandSub: string;
  headlinePre: string;
  headlineLeadIn: string;
  headlineEm: string;
  headlinePost: string;
  sub: string;
  features: { label: string; icon: FeatureIconName }[];
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    slug: 'scaffold',
    brandSub: 'for 足場',
    headlinePre: '足場資材の発注を、',
    headlineLeadIn: 'もっと',
    headlineEm: 'かんたん',
    headlinePost: 'に。',
    sub: '現場で選んで、そのまま手配。',
    features: [
      { label: 'カンタン選択', icon: 'document' },
      { label: 'スピード発注', icon: 'cart' },
      { label: '即座に重量計算', icon: 'calculator' },
    ],
    image: '/images/products/scaffold-keyvisual.png',
    imageAlt: 'union 発注 for 足場 — 足場資材の発注画面イメージ',
  },
  {
    slug: 'lease',
    brandSub: 'for リース',
    headlinePre: 'リース機材の発注を、',
    headlineLeadIn: 'もっと',
    headlineEm: 'スムーズ',
    headlinePost: 'に。',
    sub: 'テンプレートで、電話確認ゼロへ。',
    features: [
      { label: 'テンプレート発注', icon: 'template' },
      { label: '在庫リアルタイム', icon: 'refresh' },
      { label: '返却まで一元管理', icon: 'clipboard' },
    ],
    image: '/images/products/lease-keyvisual.png',
    imageAlt: 'union 発注 for リース — リース機材の発注画面イメージ',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
