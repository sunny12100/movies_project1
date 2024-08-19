import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ({ ft }) => {
  const movie = useSelector((store) => store.movies);
  return (
    movie && (
      <div className="bg-black">
        <div className="relative pl-6 z-30 mt-[-290px]">
          <MovieList
            title={"Now Playing Movies"}
            movieList={movie?.nowPlayingMovies}
            ft={ft}
          />
          <MovieList
            title={"Upcoming Movies"}
            movieList={movie?.upcomingMovies}
            ft={ft}
          />
          <MovieList
            title={"Top Rated Movies"}
            movieList={movie?.topRatedMovies}
            ft={ft}
          />
          <MovieList
            title={"Popular Movies"}
            movieList={movie?.popularMovies}
            ft={ft}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
