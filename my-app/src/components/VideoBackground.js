import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const [trailerVideo, settrailerVideo] = useState(null);
  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en",
      API_OPTIONS
    );
    const json = await data.json();

    const result = json.results.filter((video) => video.type === "Trailer");
    const trailer = result.length ? result[0] : json.results[0];
    settrailerVideo(trailer.key);
  };
  useEffect(() => {
    getBackgroundVideo();
  }, []);
  return (
    <div className="w-screen aspect-video z-0">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo +
          "?si=_kYsDkGWUtnQVJru&amp;controls=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
