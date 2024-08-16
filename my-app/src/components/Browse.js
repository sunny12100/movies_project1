import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { addNowPlayingAnimes } from "../utils/animeSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { API_OPTIONS, API_OPTIONS_ANIME } from "../utils/constants";

const Browse = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(true);
  const ft = () => {
    console.log("anime click");
    movie(!movie);
  };

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
    console.log(json);
    dispatch(addNowPlayingAnimes(json));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    getNowPlayingAnimes();
  }, []);

  if (movie === true)
    return (
      <div>
        <Header movie={setMovie} />
        {console.log(movie)}
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      </div>
    );
  else {
    return (
      <div>
        <>
          <Header movie={ft} />
          <h1 className="text-6xl pt-70">titu don</h1>
        </>
      </div>
    );
  }
};

export default Browse;
