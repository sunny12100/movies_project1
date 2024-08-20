import React from "react";

const AnimeCard = ({ poster, ft, movieTitle, title }) => {
  const temp = () => {
    movieTitle(title);
    console.log(movieTitle);
    console.log(title);

    ft();
  };
  return (
    <div className="w-32 md:w-40 cursor-pointer pr-4 hover:scale-110 transition-transform ease-in-out  duration-200">
      <img src={poster} onClick={temp} alt="anime_poster" />
    </div>
  );
};

export default AnimeCard;
