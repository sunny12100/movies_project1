import React, { useRef } from "react";
import { API_OPTIONS, login_bg } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/movieSlice";
import MovieSearchList from "./MovieSearchList";

const MovieSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearch = async () => {
    const dataa = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBJt1xC0w6g7-d_UDa891jxHLST4gxca3M",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "Act as a movie recommendation system and provide the names of the movies comma separated only 5" +
                    searchText.current.value,
                },
              ],
            },
          ],
        }),
      }
    );

    const json = await dataa.json();
    const result = await json["candidates"][0]["content"]["parts"][0]["text"];

    const gptMovies = result.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <div className="absolute ">
        <img
          className="h-screen fixed object-cover md:fixed md:w-screen"
          src={login_bg}
          alt=""
        />
      </div>
      <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form
          className="w-[90%] md:w-1/2 absolute z-5  bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-1 m-2 md:p-4 md:m-4 col-span-9"
            placeholder="What Would you like to watch today?"
          />
          <button
            onClick={handleSearch}
            className="col-span-3 md:my-4 md:mx-4 mx-1 my-4 py-2 md:px-4 px-0 bg-red-700 text-white rounded-lg"
          >
            SEARCH
          </button>
        </form>
      </div>
      <MovieSearchList />
    </div>
  );
};

export default MovieSearch;
