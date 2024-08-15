import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    movie && (
      <div className="bg-black">
        <div className="relative pl-6 z-30 mt-[-290px]">
          <MovieList
            title={"Now Playing Movies"}
            movieList={movie?.nowPlayingMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movieList={movie?.upcomingMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movieList={movie?.topRatedMovies}
          />
          <MovieList
            title={"Popular Movies"}
            movieList={movie?.popularMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
