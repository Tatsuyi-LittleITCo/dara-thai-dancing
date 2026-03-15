
'use client';
import { useContext, useMemo } from 'react';
import { LangContext, t } from '../components/LangProvider';
import FacebookEmbed from '../components/FacebookEmbed';
import InstagramEmbed from '../components/InstagramEmbed';     // <— add
// import InstagramPosts from '../components/InstagramPosts';  // <— use if you go with official post embeds
import YouTubeChannel from '../components/YouTubeChannel';     // <— add

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const mapQuery = useMemo(
    () => encodeURIComponent('Dara Thai Dance School, Perth WA'),
    []
  );

  return (
    <main>
      {/* ... your existing Hero / About / Classes sections ... */}

      {/* Facebook */}
      <section id="facebook" className="section">
        <div className="container">
          <h2 style={{ color: 'var(--accent-2)' }}>{t(lang, 'fb_title')}</h2>
          <p className="p">{t(lang, 'fb_sub')}</p>
          <FacebookEmbed pageUrl="https://www.facebook.com/darathaidancing" height={680} />
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
              <InstagramEmbed height={560} />
              <div style={{ marginTop: 10 }}>
                <a
                  className="btn ghost"
                  href="https://www.instagram.com/darathaidancing/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(lang, 'ig_follow')}
                </a>
              </div>
              {/*
              // If you choose the official post embeds, swap:
              <InstagramPosts posts={[
                'https://www.instagram.com/p/XXXXXXXXXXX/',
                'https://www.instagram.com/reel/XXXXXXXXXXX/'
              ]} />
              */}
            </div>

            {/* YouTube */}
            <div>
              <h3 style={{ margin: 0 }}>{t(lang, 'yt_title')}</h3>
              <p className="p" style={{ marginTop: 6 }}>{t(lang, 'yt_desc')}</p>
              <YouTubeChannel channelSlug="DaraThaiDancingSchool" height={360} />
              <div style={{ marginTop: 10, display: 'flex', gap: 10 }}>
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
        </div>
      </section>

      {/* Contact (unchanged) */}
      {/* ... your existing Contact section ... */}
    </main>
  );
}
