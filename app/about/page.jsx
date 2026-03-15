
'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { LangContext, t } from '../../components/LangProvider';

export default function AboutPage() {
  const { lang } = useContext(LangContext);

  return (
    <main>
      <section className="section">
        <div className="container grid grid-2" style={{ gap: '2rem' }}>
          {/* LEFT COLUMN: Text content */}
          <div>
            <h1 className="h1">{t(lang, 'about_page_title')}</h1>
            <p className="p" style={{ marginTop: 12 }}>
              {t(lang, 'about_page_intro')}
            </p>

            <h2 style={{ color: 'var(--accent-2)', marginTop: 20 }}>
              {t(lang, 'mission_title')}
            </h2>
            <p className="p">
              {t(lang, 'mission_body_1')}
              <strong>{t(lang, 'mission_body_name1')}</strong>
              {t(lang, 'mission_body_2')}
              <strong>{t(lang, 'mission_body_name2')}</strong>
              {t(lang, 'mission_body_3')}
            </p>

            <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
              {['offering_styles', 'offering_workshops', 'offering_festivals', 'offering_bookings', 'offering_thai_lang', 'offering_cooking'].map((key) => (
                <li key={key}>{t(lang, key)}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Image card */}
          <aside>
            <div
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                borderRadius: '1rem',
                height: '100%' // set a fixed height (e.g., '520px') if you want a consistent card height
              }}
            >
              <Image
                src="/darathai-mum.jpg"
                alt="Founder of Dara Thai Dance School in traditional Thai dance costume"
                width={600}
                height={800}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
