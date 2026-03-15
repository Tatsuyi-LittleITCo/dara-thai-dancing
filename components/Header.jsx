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
        
        export default function Header() {
          const { lang } = useContext(LangContext);
        
          
              // Mobile menu state
                const [menuOpen, setMenuOpen] = useState(false);
              
                return (
                  <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
                    <div className="container header-inner">
                      {/* Logo / Brand */}
                      <div className="brand">
                      </div>

                  {/* Desktop nav */}
                  <nav className="nav-desktop" aria-label="Primary">
                    <Link href="/about">{t(lang, 'nav_about') ?? 'About'}</Link>
                    <Link href="/classes">{t(lang, 'nav_classes') ?? 'Classes'}</Link>
                    <Link href="/events">{t(lang, 'nav_events') ?? 'Events'}</Link>
                    <Link href="/contact" className="btn primary">
                      {t(lang, 'nav_contact') ?? 'Contact'}
                    </Link>
                  </nav>

                  {/* Mobile menu button */}
                          <button
                            className="nav-toggle"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((v) => !v)}
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
                            >
                              <Link href="/about" onClick={() => setMenuOpen(false)}>
                                {t(lang, 'nav_about') ?? 'About'}
                              </Link>
                              <Link href="/classes" onClick={() => setMenuOpen(false)}>
                                {t(lang, 'nav_classes') ?? 'Classes'}
                              </Link>
                              <Link href="/events" onClick={() => setMenuOpen(false)}>
                                {t(lang, 'nav_events') ?? 'Events'}
                              </Link>
                              <Link href="/contact" className="btn primary" onClick={() => setMenuOpen(false)}>
                                {t(lang, 'nav_contact') ?? 'Contact'}
                              </Link>
                            </nav>
                      
                            {/* Minimal styles (optional) */}
                            <style jsx>{`
                              .header-inner {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                gap: 1rem;
                                padding: 0.75rem 0;
                              }
                              .nav-desktop {
                                display: none;
                                gap: 1rem;
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
                              }
                              .nav-mobile {
                                display: grid;
                                gap: 0.75rem;
                                padding: 0 1rem 1rem;
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
