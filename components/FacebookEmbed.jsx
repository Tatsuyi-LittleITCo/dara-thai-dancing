'use client';

export default function FacebookEmbed({ pageUrl, height = 1200 }) {
  const encodedUrl = encodeURIComponent(pageUrl);
  const src = `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=600&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <iframe
      title="Facebook Page"
      src={src}
      width="100%"
      height={height}
      style={{ border: 'none', overflow: 'hidden' }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      loading="lazy"
    />
  );
}
