'use client';

export default function FacebookEmbed({ pageUrl, height = 1200 }) {
  const encoded = encodeURIComponent(pageUrl);

  return (
    <div className="fb-card">
      <div className="fb-card-header">
        <span>Latest from Facebook</span>
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fb-button"
        >
          Follow
        </a>
      </div>

      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=${encoded}&tabs=timeline&width=600&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
