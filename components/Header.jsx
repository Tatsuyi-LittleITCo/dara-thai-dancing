'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { LangContext, t } from './LangProvider';

export default function Header() {
  const { lang /*, setLang */ } = useContext(LangContext);
  const pathname = usePathname();
  const isActive = (href) => pathname === href; 

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false)

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
        {/* Logo + Site Name */}
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link href="/" aria-label="Home" onClick={() => setMenuOpen(false)} style={{display:'inline-flex',alignItems:'center',gap:12,textDecoration:'none'}}>
            <img
              src="/logo.jpg"
              alt="Dara Thai Dancing School"
              width={40}
              height={40}
              style={{ borderRadius: 8, objectFit: 'cover' }}
            />
            <strong className="brand-name" style={{ lineHeight: 1, fontSize: '1.4rem', color: 'inherit' }}>
              Dara Thai
            </strong>
          </Link>
        </div>

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

        {/* Mobile menu button */}
        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="sr-only">{t(lang, 'nav_toggle') ?? 'Toggle menu'}</span>
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
        <Link href="/about">{t(lang, 'nav_about') ?? 'About'}</Link>
        <Link href="/classes">{t(lang, 'nav_classes') ?? 'Classes'}</Link>
        <Link href="/events">{t(lang, 'nav_events') ?? 'Events'}</Link>
        <Link href="/contact">{t(lang, 'nav_contact') ?? 'Contact'}</Link>
      </nav>

      {/* Minimal styles (scoped to this component) */}
      <style jsx>{`
        .header-inner {
          /* layout handled inline above; keep class for future tweaks */
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
