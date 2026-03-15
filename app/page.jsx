'use client';
import { useContext, useMemo } from 'react';
import { LangContext, t } from '../components/LangProvider';
import FacebookEmbed from '../components/FacebookEmbed';

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const mapQuery = useMemo(
    () => encodeURIComponent('Dara Thai Dance School, Perth WA'),
    []
  );

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div
          className="hero-inner container section grid grid-2"
          style={{ alignItems: 'center', gap: '2rem' }}
        >
          <div>
            <h1 className="h1">{t(lang, 'hero_title')}</h1>
            <p className="p" style={{ margin: '1rem 0 1.25rem' }}>
              {t(lang, 'hero_desc')}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn primary" href="#classes">
                {t(lang, 'cta_join')}
              </a>
              <a className="btn ghost" href="#facebook">
                {t(lang, 'cta_fb')}
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{ padding: 0, borderRadius: '1.25rem', overflow: 'hidden' }}
          >
            <img
              src="/hero.jpg"
              alt="Thai dance presentation"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container grid grid-2" style={{ gap: '2rem' }}>
          <div>
            <h2 style={{ color: 'var(--accent-2)' }}>
              {t(lang, 'about_title')}
            </h2>
            <p className="p">{t(lang, 'about_body')}</p>
            <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
              <li>✅ Classical &amp; folk styles (all ages)</li>
              <li>✅ Workshops &amp; school incursions</li>
              <li>✅ Community &amp; cultural festivals</li>
              <li>✅ Performance bookings</li>
            </ul>
          </div>

          <aside className="card">
            <h3 style={{ color: 'var(--accent-2)', marginTop: 0 }}>
              {t(lang, 'quick_details')}
            </h3>
            <div className="p" style={{ fontSize: 14 }}>
              <div>
                <strong>{t(lang, 'location')}:</strong> Perth, WA
              </div>
              <div>
                <strong>{t(lang, 'phone')}:</strong> 0433 216 381
              </div>
              <div>
                <strong>{t(lang, 'email')}:</strong> info@darathaidancing.com.au
              </div>
              <div>
                <strong>{t(lang, 'facebook')}:</strong>{' '}
                <a
                  href="https://www.facebook.com/darathaidancing"
                  target="_blank"
                  rel="noreferrer"
                >
                  @darathaidancing
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Classes */}
      <section
        id="classes"
        className="section"
        style={{
          background: '#fff',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="container">
          <h2 style={{ color: 'var(--accent-2)' }}>
            {t(lang, 'classes_title')}
          </h2>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            {[
              { title: t(lang, 'kids_title'), desc: t(lang, 'kids_desc') },
              { title: t(lang, 'adults_title'), desc: t(lang, 'adults_desc') },
              { title: t(lang, 'troupe_title'), desc: t(lang, 'troupe_desc') },
            ].map((c, i) => (
              <div key={i} className="card">
                <h3 style={{ color: 'var(--accent)', marginTop: 0 }}>
                  {c.title}
                </h3>
                <p className="p" style={{ fontSize: 14 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            className="p"
            style={{ marginTop: 12, fontSize: 14, color: '#6b7280' }}
          >
            {t(lang, 'timetable_note')}
          </p>
        </div>
      </section>

      {/* Facebook */}
      <section id="facebook" className="section">
        <div className="container">
          <h2 style={{ color: 'var(--accent-2)' }}>{t(lang, 'fb_title')}</h2>
          <p className="p">{t(lang, 'fb_sub')}</p>
          <FacebookEmbed
            pageUrl="https://www.facebook.com/darathaidancing"
            height={680}
          />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section"
        style={{ background: 'var(--soft-red)', borderTop: '1px solid #e5e7eb' }}
      >
        <div className="container grid grid-2" style={{ gap: '2rem' }}>
          <div>
            <h2 style={{ color: 'var(--accent-2)' }}>
              {t(lang, 'contact_title')}
            </h2>
            <p className="p">{t(lang, 'contact_desc')}</p>
            <ul className="p" style={{ lineHeight: 1.9 }}>
              <li>
                <strong>{t(lang, 'phone')}:</strong> 0433 216 381
              </li>
              <li>
                <strong>{t(lang, 'email')}:</strong>{' '}
                info@darathaidancing.com.au
              </li>
              <li>
                <strong>{t(lang, 'location')}:</strong> Perth, Western Australia
              </li>
            </ul>
            <div
              style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}
            >
              <a
                className="btn primary"
                href="https://www.facebook.com/darathaidancing"
                target="_blank"
                rel="noreferrer"
              >
                {t(lang, 'msg_fb')}
              </a>
              <a
                className="btn ghost"
                href={`https://www.google.com/maps?q=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                {t(lang, 'open_maps')}
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 0 }}>
            <iframe
              title="Map"
              style={{ width: '100%', height: 360, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
