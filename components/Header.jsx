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
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🪷</span>
          <strong>{t(lang, 'site_name')}</strong>
        </div>

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
