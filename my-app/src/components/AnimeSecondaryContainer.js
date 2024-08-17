import React from "react";
import { useSelector } from "react-redux";
import AnimeList from "./AnimeList";

const AnimeSecondaryContainer = () => {
  const animes = useSelector((store) => store.animes?.nowPlayingAnimes);

  return (
    animes && (
      <div className="bg-black">
        <div className="relative pl-6 z-30 mt-[-290px]">
          <AnimeList
            title={"Now Playing Animes"}
            AnimeList={animes?.slice(0, 12)}
          />
          <AnimeList
            title={"Upcoming Animes"}
            AnimeList={animes?.slice(13, 24)}
          />
          <AnimeList
            title={"Top Rated Animes"}
            AnimeList={animes?.slice(25, 37)}
          />
          <AnimeList
            title={"Popular Animes"}
            AnimeList={animes?.slice(38, 49)}
          />
        </div>
      </div>
    )
  );
};

export default AnimeSecondaryContainer;
