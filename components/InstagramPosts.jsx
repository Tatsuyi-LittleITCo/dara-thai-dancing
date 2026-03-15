'use client';
import { useEffect } from 'react';

export default function InstagramPosts({ posts = [] }) {
  useEffect(() => {
    // Load Instagram embed script once
    if (!document.getElementById('ig-embed-script')) {
      const s = document.createElement('script');
      s.id = 'ig-embed-script';
      s.async = true;
      s.src = 'https://www.instagram.com/embed.js';
      document.body.appendChild(s);
    } else if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [posts]);

  return (
    <div className="grid" style={{ gap: '1rem' }}>
      {posts.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ background: '#fff', border: 0, margin: 0, width: '100%' }}
        />
      ))}
    </div>
  );
}
