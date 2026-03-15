
'use client';
import { useContext } from 'react';
import { LangContext, t } from './LangProvider';

export default function Header() {
  const { lang, setLang } = useContext(LangContext);

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
        {/* Logo / Site Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#top" aria-label={t(lang, 'site_name')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <img
              src="/logo.jpg"         // <-- put your image in /public/logo.jpg (or .svg)
              alt={t(lang, 'site_name')}
              width={40}
              height={40}
              style={{ display: 'block', width: 40, height: 40, objectFit: 'contain' }}
            />
            <strong style={{ lineHeight: 1 }}>{t(lang, 'site_name')}</strong>
          </a>
        </div>

        {/* Language toggle + nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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

          <nav className="nav">
            <a href="#about">{t(lang, 'nav_about')}</a>
            <a href="#classes">{t(lang, 'nav_classes')}</a>
            <a href="#facebook">{t(lang, 'nav_facebook')}</a>
            <a href="#contact">{t(lang, 'nav_contact')}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
