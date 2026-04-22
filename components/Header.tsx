'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`tech-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="tech-nav">
        <Link href="/" className="tech-logo">
          <Image src="/images/logo.png" alt="union" width={160} height={52} className="tech-logo-img" priority />
        </Link>

        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`tech-nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><Link href="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''}>ホーム</Link></li>
          <li><Link href="/company" onClick={closeMenu} className={isActive('/company') ? 'active' : ''}>会社概要</Link></li>
          <li><Link href="/services" onClick={closeMenu} className={isActive('/services') ? 'active' : ''}>プロダクト</Link></li>
          <li><Link href="/blog" onClick={closeMenu} className={isActive('/blog') ? 'active' : ''}>ブログ</Link></li>
          <li>
            <Link href="/contact" onClick={closeMenu} className={`nav-cta ${isActive('/contact') ? 'active' : ''}`}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
