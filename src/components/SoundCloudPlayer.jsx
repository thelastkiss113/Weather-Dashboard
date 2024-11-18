import React from "react";

const SoundCloudPlayer = () => {
  return (
    <div className="music-player">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/292015932&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/bad-782004945"
          title="vaporwave"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          vaporwave
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/bad-782004945/macintosh-plus-420"
          title="MACINTOSH PLUS - リサフランク420現代のコンピュー"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          MACINTOSH PLUS - リサフランク420現代のコンピュー
        </a>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
