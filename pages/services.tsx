import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServicesList from '@/components/ServicesList';
import CTASection from '@/components/CTASection';

export default function Services() {
  return (
    <>
      <Head>
        <title>サービス | union</title>
        <meta
          name="description"
          content="union が提供する現場特化型SaaSプロダクトの一覧。発注、介護記録、日報、勤怠管理など、現場の課題に寄り添ったツールを提供します。"
        />
      </Head>

      <Header />
      <PageHero
        title="サービス"
        subtitle="現場の課題に寄り添う<br />unionプロダクトシリーズ"
      />

      <ServicesList />
      <CTASection />
      <Footer />
    </>
  );
}
