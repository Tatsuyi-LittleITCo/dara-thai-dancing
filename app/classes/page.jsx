'use client';
import { useContext } from 'react';
import { LangContext, t } from '../../components/LangProvider';

export default function ClassesPage(){
  const { lang } = useContext(LangContext);
  const classes = [
    { title: t(lang,'kids_title'), desc: t(lang,'kids_desc') },
    { title: t(lang,'adults_title'), desc: t(lang,'adults_desc') },
    { title: t(lang,'troupe_title'), desc: t(lang,'troupe_desc') },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">{t(lang,'classes_page_title')}</h1>
          <p className="p" style={{ marginTop:12 }}>{t(lang,'classes_intro')}</p>

          <div className="grid grid-3" style={{ marginTop:'1rem' }}>
            {classes.map((c, i) => (
              <div key={i} className="card">
                <h3 style={{ color:'var(--accent)', marginTop:0 }}>{c.title}</h3>
                <p className="p" style={{ fontSize:14 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop:16 }}>
            <h3 style={{ marginTop:0, color:'var(--accent-2)' }}>{t(lang, 'timetable_title')}</h3>
            <ul className="p" style={{ lineHeight:1.9 }}>
              <li>{t(lang, 'timetable_kids')}</li>
              <li>{t(lang, 'timetable_teens')}</li>
              <li>{t(lang, 'timetable_troupe')}</li>
            </ul>
            <p className="p" style={{ fontSize:14, color:'#6b7280' }}>{t(lang,'timetable_note')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
