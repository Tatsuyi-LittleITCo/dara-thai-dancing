'use client';

export default function YouTubeChannel({
  channelSlug = 'DaraThaiDancingSchool', // from https://www.youtube.com/c/DaraThaiDancingSchool
  height = 360
}) {
  // Channel uploads playlist embed
  const playlistSrc = `https://www.youtube.com/embed?listType=user_uploads&list=${encodeURIComponent(channelSlug)}`;

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <iframe
        title="YouTube uploads"
        width="100%"
        height={height}
        src={playlistSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
