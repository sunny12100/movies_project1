import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {
  addGptMovieResult,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { addNowPlayingAnimes } from "../utils/animeSlice";
import MainContainer from "./MainContainer";
import AnimeMainContainer from "./AnimeMainContainer";
import AnimeSecondaryContainer from "./AnimeSecondaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import { API_OPTIONS, API_OPTIONS_ANIME } from "../utils/constants";
import MovieSearch from "./MovieSearch";
import MovieSearchList from "./MovieSearchList";
import MoviePlayer from "./MoviePlayer";

const Browse = () => {
  const [isAnime, setIsAnime] = useState(false);
  const [movieSearch, setMovieSearch] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleAnime = () => {
    setIsAnime(!isAnime);
  };
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    window.addEventListener("popstate", function (event) {
      setIsPlaying(false);
    });
  };
  const toggleSearch = () => {
    setMovieSearch(!movieSearch);
    if (movieSearch)
      dispatch(addGptMovieResult({ movieResults: null, movieNames: null }));
  };
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  const getNowPlayingAnimes = async () => {
    const data = await fetch(
      "https://myanimelist.p.rapidapi.com/anime/top/all?p=1",
      API_OPTIONS_ANIME
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingAnimes(json));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    getNowPlayingAnimes();
  }, []);

  return (
    <>
      <Header
        toggle={toggleAnime}
        toggleSearch={toggleSearch}
        isAnime={isAnime}
        movieSearch={movieSearch}
        isPlaying={isPlaying}
      />
      {movieSearch ? (
        <>
          {!isPlaying ? (
            <>
              <MovieSearch />
              <MovieSearchList ft={togglePlay} />
            </>
          ) : (
            <>
              {" "}
              <MoviePlayer />
            </>
          )}
        </>
      ) : (
        <>
          {isAnime ? (
            <>
              <AnimeMainContainer />
              <AnimeSecondaryContainer />
            </>
          ) : (
            <>
              {!isPlaying ? (
                <>
                  <MainContainer />
                  <SecondaryContainer ft={togglePlay} />
                </>
              ) : (
                <>
                  <MoviePlayer />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Browse;
