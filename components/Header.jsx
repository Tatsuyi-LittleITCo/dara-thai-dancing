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
        {/* Logo area */}
        <Link
          href="/"
          aria-label="Go to home"
          className="header-logo-link"
          onClick={() => setMenuOpen(false)}
        >
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
        <nav className="nav">
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
