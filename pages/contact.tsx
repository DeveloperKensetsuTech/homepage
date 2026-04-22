import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export default function Contact() {
  return (
    <>
      <Head>
        <title>お問い合わせ | union</title>
        <meta
          name="description"
          content="unionプロダクトの導入やご質問など、お気軽にお問い合わせください。"
        />
      </Head>

      <Header />
      <PageHero
        eyebrow="Contact — お問い合わせ"
        title="現場の悩み、聞かせてください"
        subtitle="プロダクト導入のご相談、デモのご依頼、採用やメディア取材まで。<br />どんな入口でも、まずはお気軽にご連絡ください。"
      />

      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  );
}
