import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>建設テックパートナーズ | 株式会社main character - 建設業特化DX支援</title>
        <meta
          name="description"
          content="建設業に特化したDXアプリの開発運用とDX支援を行う株式会社main character。九州・福岡を拠点に建設現場の生産性向上をサポートします。無料相談実施中。"
        />
        <meta
          name="keywords"
          content="建設業,DX,システム開発,九州,福岡,業務効率化,生産性向上,建設テック,アプリ開発"
        />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
