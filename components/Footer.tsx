import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="tech-footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-brand">建設テックパートナーズ</p>
          <p className="footer-description">
            株式会社main character<br />
            〒814-0001<br />
            福岡県福岡市早良区百道浜2-3-2
          </p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link href="/services/dx-consulting">DXコンサルティング</Link></li>
            <li><Link href="/services/product-development">プロダクト開発</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link href="/company">会社概要</Link></li>
            <li><Link href="/blog">ブログ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><Link href="/members">メンバー</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 株式会社main character. All rights reserved.</p>
      </div>
    </footer>
  );
}
