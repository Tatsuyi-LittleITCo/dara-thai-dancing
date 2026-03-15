'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { LangContext, t } from './LangProvider';

export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '.8rem 1rem',
        }}
      >
        {/* Logo + Site Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link
            href="/"
            aria-label="Go to home"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <img
              src="/logo.jpg"
              alt="Dara Thai Dance School logo"
              className="header-logo"
              style={{ width: 250, height: 'auto', display: 'block' }}
            />
            <strong style={{ lineHeight: 1, fontSize: '1.4rem', color: 'inherit' }}></strong>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-area ${menuOpen ? 'open' : ''}`}>
          
          <nav className="nav">
            <a href="#about">{t(lang,'nav_about')}</a>
            <a href="#classes">{t(lang,'nav_classes')}</a>
            <a href="#facebook">{t(lang,'nav_facebook')}</a>
            <a href="#contact">{t(lang,'nav_contact')}</a>
          </nav>

          <div className="lang-toggle">
            <button onClick={() => setLang('en')}>EN</button>
            <button onClick={() => setLang('th')}>ไทย</button>
          </div>

        </div>

      </div>
    </header>
  );
}
