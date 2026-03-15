
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
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '.8rem 1rem' }}>
        {/* Logo + Site Name */}
        <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
          <Link href="/" aria-label="Go to home" style={{ display:'flex', alignItems:'center', gap: 10, textDecoration:'none' }}>
            <img src="/logo.png" alt="Dara Thai Dance School logo" className="header-logo" style={{ width: 2000, height: 'auto', display:'block' }} />
          </Link>
        </div>

        {/* Language toggle + nav */}
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div className="lang-toggle" role="group" aria-label="Language toggle">
            <button className={lang==='en' ? 'active' : ''} onClick={()=>setLang('en')} aria-pressed={lang==='en'}>EN</button>
            <button className={lang==='th' ? 'active' : ''} onClick={()=>setLang('th')} aria-pressed={lang==='th'}>ไทย</button>
          </div>

          <nav className="nav" style={{ display:'flex', gap: '1rem' }}>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>{t(lang,'nav_about')}</Link>
            <Link href="/classes" className={isActive('/classes') ? 'active' : ''}>{t(lang,'nav_classes')}</Link>
            <Link href="/events" className={isActive('/events') ? 'active' : ''}>{t(lang,'nav_events')}</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>{t(lang,'nav_contact')}</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
