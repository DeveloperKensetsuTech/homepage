import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-inner">
        <div className="footer-v2-top">
          <div className="footer-v2-brand">
            <Image src="/images/logo.png" alt="union" width={136} height={44} className="footer-v2-logo-img" />
            <p className="footer-v2-company">
              株式会社main character
            </p>
            <p className="footer-v2-address">
              〒814-0001<br />
              福岡県福岡市早良区百道浜2-3-2
            </p>
          </div>

          <div className="footer-v2-links">
            <div className="footer-v2-col">
              <h3>Company</h3>
              <ul>
                <li><Link href="/company">会社概要</Link></li>
                <li><Link href="/services">プロダクト</Link></li>
                <li><Link href="/blog">ブログ</Link></li>
              </ul>
            </div>
            <div className="footer-v2-col">
              <h3>Contact</h3>
              <ul>
                <li><Link href="/contact">お問い合わせ</Link></li>
                <li><a href="mailto:info@kensetsu-tech.com">info@kensetsu-tech.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-v2-bottom">
          <p>&copy; {new Date().getFullYear()} 株式会社main character</p>
        </div>
      </div>
    </footer>
  );
}
