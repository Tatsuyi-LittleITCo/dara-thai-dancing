export default function FacebookEmbed({ pageUrl, height = 1400, width = '100%' }) {
  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-tabs="timeline"
      data-width={width}
      data-height={height}
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
        <a href={pageUrl}>
          Dara Thai Dancing School
        </a>
      </blockquote>
    </div>
  );
}
