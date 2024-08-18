import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!POSTER_URL) return null;
  return (
    <div className="w-40 pr-4 hover:scale-110 transition-transform ease-in-out  duration-200">
      <img className="" src={POSTER_URL + poster} alt="movie_poster" />
    </div>
  );
};

export default MovieCard;
