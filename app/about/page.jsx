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
              <li>✅ Classical & folk styles (all ages)</li>
              <li>✅ Workshops & school incursions</li>
              <li>✅ Community & cultural festivals</li>
              <li>✅ Performance bookings</li>
            </ul>
          </div>
          <aside className="card">
            <h3 style={{ color:'var(--accent-2)', marginTop:0 }}>{t(lang,'quick_details')}</h3>
            <div className="p" style={{ fontSize:14 }}>
              <div><strong>{t(lang,'location')}:</strong> Perth, WA</div>
              <div><strong>{t(lang,'phone')}:</strong> 0433 216 381</div>
              <div><strong>{t(lang,'email')}:</strong> info@darathaidancing.com.au</div>
              <div><strong>{t(lang,'facebook')}:</strong> https://www.facebook.com/darathaidancing</div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
