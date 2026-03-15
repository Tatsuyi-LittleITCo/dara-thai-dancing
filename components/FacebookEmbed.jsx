'use client';
export default function FacebookEmbed({ pageUrl, height = 640 }) {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=900&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;
  return (
    <div className="card" style={{padding:0, overflow:'hidden'}}>
      <iframe
        title="Facebook Page"
        style={{border:'none', overflow:'hidden', width:'100%', height}}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media; picture-in-picture; web-share"
        src={src}
      />
    </div>
  );
}
