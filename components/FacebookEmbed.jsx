'use client';
export default function FacebookEmbed({ pageUrl, height = 420 }) {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    pageUrl
  )}&tabs=timeline&width=900&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="embed-16x9">
        <iframe
          title="Facebook Page"
          src={src}
          scrolling="no"
          allow="encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
