'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServiceImage {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

type ImageLayout = 'wide' | 'square-grid';

interface Service {
  slug: string;
  name: string;
  nameSub?: string;
  tagline?: string;
  description?: string;
  features?: string[];
  comingSoon?: boolean;
  icon?: string;
  images?: ServiceImage[];
  imageLayout?: ImageLayout;
}

export default function ServicesList() {
  const { ref, isVisible } = useScrollReveal(0.05);

  const services: Service[] = [
    {
      slug: 'scaffold',
      name: 'union 発注',
      nameSub: 'for 足場',
      icon: '/images/icon-shizai.png',
      description:
        '紙とFAXに頼っていた足場資材の発注業務を、スマートフォンひとつで完結。現場から数タップで発注書を作成・送信でき、発注ミスや転記作業を削減します。職人と現場監督、どちらも迷わず使えるシンプルな設計です。',
      features: [
        'スマホから数タップで発注',
        '発注履歴・発注書PDFを自動保存',
        '現場・作業者ごとの発注管理',
      ],
      images: [
        {
          src: '/images/services/scaffold-phone.png',
          alt: 'union 発注 for 足場 のスマホ発注書画面',
        },
        {
          src: '/images/services/scaffold-laptop.png',
          alt: 'union 発注 for 足場 の発注書履歴画面',
        },
      ],
      imageLayout: 'square-grid',
    },
    {
      slug: 'lease',
      name: 'union 発注',
      nameSub: 'for リース',
      icon: '/images/icon-shizai.png',
      description:
        'リース資材の出庫・返却業務を、現場主導でデジタル化。テンプレート化された発注フローと、リアルタイムな在庫状況の共有によって、電話確認や差し戻しを大幅に削減します。',
      features: [
        'リース資材専用の発注テンプレート',
        '在庫状況のリアルタイム連携',
        '出庫・返却履歴の一元管理',
      ],
      images: [
        {
          src: '/images/services/lease-order-form.png',
          alt: 'union 発注 for リース の発注情報入力画面',
        },
        {
          src: '/images/services/lease-categories.png',
          alt: 'union 発注 for リース のカテゴリ一覧画面',
        },
      ],
      imageLayout: 'square-grid',
    },
    {
      slug: 'care',
      name: 'union 介護記録',
      tagline: '利用者一人ひとりの「今日」を、かんたんに記録',
      comingSoon: true,
    },
    {
      slug: 'daily-report',
      name: 'union 日報',
      tagline: '現場の今日を、3分で残す',
      comingSoon: true,
    },
    {
      slug: 'attendance',
      name: 'union 勤怠管理',
      tagline: '現場主義の勤怠管理',
      comingSoon: true,
    },
  ];

  return (
    <section className="services-list-section" ref={ref}>
      <div className="services-list-inner">
        {services.map((service, index) => (
          <article
            key={service.slug}
            id={`service-${service.slug}`}
            className={`service-item ${service.images ? 'service-item--with-media' : ''} reveal stagger-${Math.min(index + 1, 5)} ${isVisible ? 'visible' : ''}`}
          >
            <div className="service-item-content">
            <div className="service-item-head">
              {service.icon && (
                <div className="service-item-icon">
                  <Image src={service.icon} alt="" width={56} height={56} />
                </div>
              )}
              <div>
                <h2 className="service-item-name">
                  {service.name}
                  {service.nameSub && <br />}
                  {service.nameSub && <span className="service-item-name-sub">{service.nameSub}</span>}
                  {service.comingSoon && (
                    <span className="service-item-badge">Coming Soon</span>
                  )}
                </h2>
                {service.tagline && <p className="service-item-tagline">{service.tagline}</p>}
              </div>
            </div>

            {(service.description || service.features) && (
              <div className="service-item-body">
                {service.description && (
                  <p className="service-item-description">{service.description}</p>
                )}

                {service.features && (
                  <ul className="service-item-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="service-item-feature-mark" aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            </div>

            {service.images && service.images.length > 0 && (
              <div
                className={`service-item-media service-item-media--${service.imageLayout ?? 'wide'}`}
              >
                {service.images.map((image) => (
                  <div
                    key={image.src}
                    className={`service-item-media-frame service-item-media-frame--${service.imageLayout ?? 'wide'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 800px"
                      style={{
                        objectFit: image.objectFit ?? 'cover',
                        objectPosition: image.objectPosition ?? 'center',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
