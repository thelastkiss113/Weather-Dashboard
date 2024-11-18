import React from "react";

/**
 * Component that renders a SoundCloud player with a Vaporwave song.
 */
const SoundCloudPlayer = () => {
  return (
    <div className="music-player">
      <iframe
        width="50%"
        height="80"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/292015932&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      ></iframe>
    </div>
  );
};


export default SoundCloudPlayer;
