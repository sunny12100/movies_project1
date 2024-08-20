import React, { useState } from "react";
import { POSTER_URL } from "../utils/constants";
// import { useNavigate } from "react-router";
// import MoviePlayer from "./MoviePlayer";

const MovieCard = ({ poster, ft, title1, movieTitle }) => {
  const temp = () => {
    movieTitle(title1);
    console.log(movieTitle);
    console.log(title1);

    ft();
  };
  // const [isPlaying, setIsPlaying] = useState(false);
  // const navigate = useNavigate();

  // const handlePlayClick = () => {
  //   setIsPlaying(!isPlaying);
  //   navigate("/player");
  // };

  if (!poster) return null;
  return (
    <div className="w-32 md:w-40 cursor-pointer pr-4 hover:scale-110 transition-transform ease-in-out  duration-200">
      <img
        className=""
        onClick={temp}
        src={POSTER_URL + poster}
        alt="movie_poster"
      />
    </div>
  );
};

export default MovieCard;
