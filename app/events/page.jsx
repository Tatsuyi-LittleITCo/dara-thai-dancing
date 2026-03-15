'use client';
import { useContext } from 'react';
import { LangContext, t } from '../../components/LangProvider';

export default function EventsPage(){
  const { lang } = useContext(LangContext);
  const events = [
    { date: 'TBA', title: 'Community Festival Performance', where: 'Perth Metro', link: 'https://www.facebook.com/darathaidancing' },
    { date: 'TBA', title: 'Cultural Showcase', where: 'Venue TBA', link: 'https://www.facebook.com/darathaidancing' },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">{t(lang,'events_page_title')}</h1>
          <p className="p" style={{ marginTop:12 }}>{t(lang,'events_intro')}</p>

          <div className="grid" style={{ gap:'1rem', marginTop:'1rem' }}>
            {events.map((e, i) => (
              <div key={i} className="card">
                <h3 style={{ marginTop:0 }}>{e.title}</h3>
                <p className="p" style={{ fontSize:14, margin:0 }}><strong>Date:</strong> {e.date}</p>
                <p className="p" style={{ fontSize:14, margin:'4px 0 8px' }}><strong>Where:</strong> {e.where}</p>
                <a className="btn ghost" href={e.link} target="_blank" rel="noreferrer">Facebook updates</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
