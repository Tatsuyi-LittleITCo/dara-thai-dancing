'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { LangContext, t } from './LangProvider';

export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <div
        className="container header-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '.8rem 1rem',
          gap: '1rem',
        }}
      >
        {/* Logo area */}
        <Link
          href="/"
          aria-label="Go to home"
          className="header-logo-link"
          onClick={() => setMenuOpen(false)}
        >
          {/* Full lockup: desktop + tablet */}
          <div className="header-logo-full">
            <Image
              src="/assetts/daria_zelous_trans.webp"
              alt="Dara Thai Dance School logo"
              className="header-lockup__img"
              width={560}
              height={480}
              priority
            />
            <div className="header-lockup__text">
              <span className="header-lockup__thai">ดารานาฏศิลป์ไทย</span>
              <span className="header-lockup__title">Dara Thai</span>
              <span className="header-lockup__subtitle">Dancing School</span>
            </div>
          </div>

          {/* Icon only: mobile */}
          <Image
            src="/assetts/daria_squared_trans.webp"
            alt="Dara Thai Dance School logo"
            className="header-logo-icon"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary">
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>
            {t(lang, 'nav_about') ?? 'About'}
          </Link>
          <Link href="/classes" className={isActive('/classes') ? 'active' : ''}>
            {t(lang, 'nav_classes') ?? 'Classes'}
          </Link>
          <Link href="/events" className={isActive('/events') ? 'active' : ''}>
            {t(lang, 'nav_events') ?? 'Events'}
          </Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
            {t(lang, 'nav_contact') ?? 'Contact'}
          </Link>
        </nav>

        {/* Language Toggle */}
        <div className="lang-toggle" role="group" aria-label="Language toggle">
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <button
            className={lang === 'th' ? 'active' : ''}
            onClick={() => setLang('th')}
            aria-pressed={lang === 'th'}
          >
            ไทย
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="burger" />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-menu"
        className="nav-mobile"
        hidden={!menuOpen}
        aria-label="Mobile"
        onClick={() => setMenuOpen(false)}
      >
        <Link href="/">{t(lang, 'nav_home') ?? 'Home'}</Link>
        <Link href="/about">{t(lang, 'nav_about') ?? 'About'}</Link>
        <Link href="/classes">{t(lang, 'nav_classes') ?? 'Classes'}</Link>
        <Link href="/events">{t(lang, 'nav_events') ?? 'Events'}</Link>
        <Link href="/contact">{t(lang, 'nav_contact') ?? 'Contact'}</Link>
      </nav>

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        .header-inner {
        }
        .nav-desktop {
          display: none;
          gap: 1rem;
          align-items: center;
        }
        .nav-desktop a {
          text-decoration: none;
          color: inherit;
        }
        .nav-desktop a.active {
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .nav-toggle {
          display: inline-flex;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: inherit;
        }
        .burger {
          width: 18px;
          height: 2px;
          background: currentColor;
          position: relative;
        }
        .burger::before,
        .burger::after {
          content: '';
          position: absolute;
          left: 0;
          width: 18px;
          height: 2px;
          background: currentColor;
        }
        .burger::before { top: -6px; }
        .burger::after { top: 6px; }

        .nav-mobile {
          display: grid;
          gap: 0.75rem;
          padding: 0 1rem 1rem;
        }
        .nav-mobile a {
          text-decoration: none;
          color: inherit;
          padding: .5rem 0;
        }

        @media (min-width: 960px) {
          .nav-desktop { display: inline-flex; }
          .nav-toggle { display: none; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
