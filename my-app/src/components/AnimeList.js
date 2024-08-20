import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ ft, movieTitle, title, AnimeList = [] }) => {
  if (AnimeList)
    return (
      <div className=" px-6">
        <h1 className="text-white text-xl md:text-3xl py-4">{title}</h1>
        <div className="flex scrollable-hidden overflow-y-hidden ">
          <div className="flex flex-row">
            {AnimeList.map((anime) => (
              <AnimeCard
                key={anime.myanimelist_id}
                poster={anime.picture_url}
                title={anime.title}
                ft={ft}
                movieTitle={movieTitle}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default AnimeList;
