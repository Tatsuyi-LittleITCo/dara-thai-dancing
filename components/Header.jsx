
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

  const navLinks = [
    { href: '/', label: t(lang, 'nav_home') ?? 'Home' },
    { href: '/about', label: t(lang, 'nav_about') },
    { href: '/classes', label: t(lang, 'nav_classes') },
    { href: '/events', label: t(lang, 'nav_events') },
    { href: '/contact', label: t(lang, 'nav_contact') },
  ];

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
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link
            href="/"
            aria-label="Go to home"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/assetts/daria_squared_trans.webp"
              alt="Dara Thai Dance School logo"
              className="header-logo"
              width={60}
              height={60}
              priority
              style={{ height: 'auto', display: 'block' }}
            />
          </Link>
        </div>

        {/* Desktop nav + language toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <nav className="nav" style={{ display: 'flex', gap: '1rem' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''}>
                {link.label}
              </Link>
            ))}
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

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
