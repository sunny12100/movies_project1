import React from "react";

const AnimeBackground = () => {
  return (
    <div className="w-screen aspect-video z-0">
      <iframe
        className="w-screen aspect-video "
        src="https://www.youtube.com/embed/GpZ-Uw0mw_8?si=Y15Wf1XaY0Vy_3t-&amp;controls=0&amp;start=7&autoplay=1&mute=1&loop=1"
        ttitle="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AnimeBackground;
