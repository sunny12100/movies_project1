import React from "react";
import { useSelector } from "react-redux";
import AnimeList from "./AnimeList";

const AnimeSecondaryContainer = ({ ft, movieTitle }) => {
  const animes = useSelector((store) => store.animes?.nowPlayingAnimes);

  return (
    animes && (
      <div className="bg-black">
        <div className="relative pl-0 md:pl-6 z-30 mt-0 md:mt-[-290px]">
          <AnimeList
            title={"Now Playing Animes"}
            AnimeList={animes?.slice(0, 12)}
            ft={ft}
            movieTitle={movieTitle}
          />
          <AnimeList
            title={"Upcoming Animes"}
            AnimeList={animes?.slice(13, 24)}
            ft={ft}
            movieTitle={movieTitle}
          />
          <AnimeList
            title={"Top Rated Animes"}
            AnimeList={animes?.slice(25, 37)}
            ft={ft}
            movieTitle={movieTitle}
          />
          <AnimeList
            title={"Popular Animes"}
            AnimeList={animes?.slice(38, 49)}
            ft={ft}
            movieTitle={movieTitle}
          />
        </div>
      </div>
    )
  );
};

export default AnimeSecondaryContainer;
