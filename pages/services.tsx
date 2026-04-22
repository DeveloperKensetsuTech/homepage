import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Services() {
  return (
    <>
      <Head>
        <title>プロダクト | union</title>
        <meta
          name="description"
          content="union が提供する現場特化型SaaSプロダクトの一覧。発注、介護記録、日報、勤怠管理など、現場の課題に寄り添ったツールを提供します。"
        />
      </Head>

      <Header />
      <PageHero
        eyebrow="Products — プロダクト"
        title="現場の課題に、寄り添う道具"
        subtitle="発注、記録、日報、勤怠。<br />現場の「明日から使える」だけを残した、unionプロダクトシリーズ。"
      />

      <ServicesSection />
      <CTASection />
      <Footer />
    </>
  );
}
