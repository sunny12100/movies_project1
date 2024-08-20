import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ({ ft, movieTitle }) => {
  const movie = useSelector((store) => store.movies);
  return (
    movie && (
      <div className="bg-black">
        <div className="relative pl-0 md:pl-6 z-30 mt-0 md:mt-[-290px]">
          <MovieList
            title={"Now Playing Movies"}
            movieList={movie?.nowPlayingMovies}
            ft={ft}
            movieTitle={movieTitle}
          />
          <MovieList
            title={"Upcoming Movies"}
            movieList={movie?.upcomingMovies}
            ft={ft}
            movieTitle={movieTitle}
          />
          <MovieList
            title={"Top Rated Movies"}
            movieList={movie?.topRatedMovies}
            ft={ft}
            movieTitle={movieTitle}
          />
          <MovieList
            title={"Popular Movies"}
            movieList={movie?.popularMovies}
            ft={ft}
            movieTitle={movieTitle}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
