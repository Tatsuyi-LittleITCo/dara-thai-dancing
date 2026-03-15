
'use client';
import { useContext, useMemo } from 'react';
import { LangContext, t } from '../components/LangProvider';
import FacebookEmbed from '../components/FacebookEmbed';
// import InstagramPosts from '../components/InstagramPosts';
import YouTubeChannel from '../components/YouTubeChannel';

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const mapQuery = useMemo(
    () => encodeURIComponent('Dara Thai Dance School, Perth WA'),
    []
  );

  return (
    <main>
      {/* === Background YouTube Hero === */}
      <section className="hero">
        {/* YouTube background embed */}
        <div className="yt-bg">
          <iframe
            className="yt-bg__iframe"
            src="https://www.youtube.com/embed/mTCTDW4PLQ8?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&loop=1&playlist=mTCTDW4PLQ8&enablejsapi=1"
            title="Dara Thai Dancing School background video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      </section>


      {/* Facebook as a right-hand vertical card */}
      <section id="facebook" className="section">
        <div className="container layout-with-aside">
          <div /> {/* left column (optional) */}
          <aside className="aside-sticky">
            <div className="card card-full" style={{ overflow: 'hidden', padding: 0 }}>
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderBottom: '1px solid #e5e7eb',
                  background: 'linear-gradient(135deg, var(--soft-lime), #fff)',
                }}
              >
                <h3 style={{ margin: 0, color: 'var(--accent-2)' }}>
                  {t(lang, 'fb_title')}
                </h3>
                <a
                  href="https://www.facebook.com/darathaidancing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                  style={{ padding: '6px 10px' }}
                >
                  Facebook
                </a>
              </div>

              {/* The embed */}
              <FacebookEmbed pageUrl="https://www.facebook.com/darathaidancing" height={960} />
            </div>
          </aside>
        </div>
      </section>

      {/* Social: Instagram + YouTube */}
      <section id="social" className="section" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <h2 style={{ color: 'var(--accent-2)' }}>{t(lang, 'social_title')}</h2>

          <div className="grid grid-2" style={{ marginTop: '1rem', gap: '1.25rem' }}>
            {/* Instagram */}
            <div>
              <h3 style={{ margin: 0 }}>{t(lang, 'ig_title')}</h3>
              <p className="p" style={{ marginTop: 6 }}>{t(lang, 'ig_desc')}</p>

              <a
                className="btn primary"
                href="https://www.instagram.com/darathaidancing/"
                target="_blank"
                rel="noreferrer"
              >
                {t(lang, 'ig_follow')}
              </a>
            </div>

            {/* YouTube */}
            <div>
              <h3 style={{ margin: 0 }}>{t(lang, 'yt_title')}</h3>
              <p className="p" style={{ marginTop: 6 }}>{t(lang, 'yt_desc')}</p>

              <a
                className="btn ghost"
                href="https://www.youtube.com/c/DaraThaiDancingSchool"
                target="_blank"
                rel="noreferrer"
              >
                {t(lang, 'yt_visit')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact (unchanged) */}
      {/* ... your existing Contact section ... */}
    </main>
  );
}
