import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import FeatureIcon from '@/components/FeatureIcon';
import { products, getProductBySlug, Product } from '@/lib/products';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const fullName = `union 発注 ${product.brandSub}`;

  return (
    <>
      <Head>
        <title>{`${fullName} | プロダクト - union`}</title>
        <meta name="description" content={product.sub} />
        <meta property="og:title" content={fullName} />
        <meta property="og:description" content={product.sub} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <section className="product-detail-hero">
        <div className="product-detail-hero__inner">
          <div className="product-detail-hero__nav">
            <Link href="/services" className="product-detail-hero__back">
              <span aria-hidden="true">←</span>
              プロダクト一覧へ戻る
            </Link>
          </div>

          <article className="product-showcase product-showcase--detail">
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
                  発注<span className="sub">{product.brandSub}</span>
                </div>
              </div>

              <h1 className="showcase__headline">
                {product.headlinePre}
                <br />
                {product.headlineLeadIn}
                <em>{product.headlineEm}</em>
                {product.headlinePost}
              </h1>

              <p className="showcase__sub">{product.sub}</p>

              <div className="showcase__features">
                {product.features.map((f) => (
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
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1100px) 100vw, 600px"
                priority
              />
            </div>
          </article>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  if (typeof slug !== 'string') {
    return { notFound: true };
  }

  const product = getProductBySlug(slug);
  if (!product) {
    return { notFound: true };
  }

  return { props: { product } };
};
