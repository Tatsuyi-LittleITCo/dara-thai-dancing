'use client';
import { useContext } from 'react';
import { LangContext, t } from '../../components/LangProvider';

export default function AboutPage(){
  const { lang } = useContext(LangContext);
  return (
    <main>
      <section className="section">
        <div className="container grid grid-2" style={{ gap:'2rem' }}>
          <div>
            <h1 className="h1">{t(lang,'about_page_title')}</h1>
            <p className="p" style={{ marginTop:12 }}>{t(lang,'about_page_intro')}</p>
            <h2 style={{ color:'var(--accent-2)', marginTop:20 }}>{t(lang,'mission_title')}</h2>
            <p className="p">{t(lang,'mission_body')}</p>
            <ul className="p" style={{ marginTop:12, lineHeight:1.8 }}>
              <li>✅ Traditional and Modern Styles (all ages)</li>
              <li>✅ Workshops & Social Activities</li>
              <li>✅ Community & cultural festivals</li>
              <li>✅ Performance bookings</li>
              <li>✅ Learn to Speak Thai</li>
              <li>✅ Thai Cooking and Meal Sharing</li>
            </ul>
              <div
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '1rem',
                  height: '100%'      // optional, can set a fixed height if needed
                }}
              >
                <img
                  src="/quick-details.jpg"
                  alt="Quick details"
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
