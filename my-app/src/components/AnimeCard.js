import React from "react";

const AnimeCard = ({ poster }) => {
  return (
    <div className="w-40 cursor-pointer pr-4 hover:scale-110 transition-transform ease-in-out  duration-200">
      <img src={poster} alt="anime_poster" />
    </div>
  );
};

export default AnimeCard;
