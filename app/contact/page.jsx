'use client';
import { useContext, useMemo } from 'react';
import { LangContext, t } from '../../components/LangProvider';

export default function ContactPage(){
  const { lang } = useContext(LangContext);
  const mapQuery = useMemo(() => encodeURIComponent('Dara Thai Dance School, Perth WA'), []);

  return (
    <main>
      <section className="section">
        <div className="container grid grid-2" style={{ gap:'2rem' }}>
          <div>
            <h1 className="h1">{t(lang,'contact_page_title')}</h1>
            <p className="p" style={{ marginTop:12 }}>{t(lang,'contact_intro')}</p>
            <ul className="p" style={{ lineHeight:1.9 }}>
              <li><strong>{t(lang,'phone')}:</strong> 0433 216 381</li>
              <li><strong>{t(lang,'email')}:</strong> info@darathaidancing.com.au</li>
              <li><strong>{t(lang,'location')}:</strong> Perth, Western Australia</li>
              <li><strong>{t(lang,'facebook')}:</strong> <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noreferrer">@darathaidancing</a></li>
            </ul>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginTop:8 }}>
              <a className="btn primary" href="https://www.facebook.com/darathaidancing" target="_blank" rel="noreferrer">{t(lang,'msg_fb')}</a>
              <a className="btn ghost" href={`https://www.google.com/maps?q=${mapQuery}`} target="_blank" rel="noreferrer">{t(lang,'open_maps')}</a>
            </div>
          </div>
          <div className="card" style={{ padding:0 }}>
            <iframe title="Map" style={{ width:'100%', height:360, border:0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} />
          </div>
        </div>
      </section>
    </main>
  );
}
