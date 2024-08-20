import React from "react";
import { useSelector } from "react-redux";
import AnimeTitle from "./AnimeTitle";
import AnimeBackground from "./AnimeBackground";

const AnimeMainContainer = () => {
  const animes = useSelector((store) => store.animes?.nowPlayingAnimes);
  if (animes === null) return;
  const mainAnime = animes[0];
  // console.log(mainAnime);
  return (
    <div className="md:pt-0 pt-48 bg-black">
      <AnimeTitle title={mainAnime.title} />
      <AnimeBackground />
    </div>
  );
};

export default AnimeMainContainer;
