import React, { useState } from "react";
import { POSTER_URL } from "../utils/constants";
// import { useNavigate } from "react-router";
// import MoviePlayer from "./MoviePlayer";

const MovieCard = ({ poster, ft }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const navigate = useNavigate();

  // const handlePlayClick = () => {
  //   setIsPlaying(!isPlaying);
  //   navigate("/player");
  // };

  if (!poster) return null;
  return (
    <div className="w-40 cursor-pointer pr-4 hover:scale-110 transition-transform ease-in-out  duration-200">
      <img
        className=""
        onClick={ft}
        src={POSTER_URL + poster}
        alt="movie_poster"
      />
    </div>
  );
};

export default MovieCard;
