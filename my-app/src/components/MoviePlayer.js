import React from "react";
import ReactPlayer from "react-player";
import { login_bg } from "../utils/constants";

const MoviePlayer = ({ movieTitle }) => {
  return (
    <div className="">
      <img
        src={login_bg}
        alt=""
        className="fixed z-0 opacity-80 h-screen object-cover md:w-screen"
      />
      <h1 className=" absolute z-0 mt-[40%] md:mr-0 mr-[5%] ml-[5%] md:mt-[7%] bg-red-600 rounded-lg p-2 md:ml-[25%]  font-bold text-xl  md:text-5xl text-white ">
        Movie Name : {movieTitle}
      </h1>
      <div className="mt-[60%] md:pt-[15%] md:ml-0 md:mt-0 md:pl-[30%] ml-10 fixed z-0 md:h-[80%] md:w-3/4 w-[80%] h-[30%]">
        <ReactPlayer
          className=" aspect-video"
          url="https://www.youtube.com/watch?v=WO2b03Zdu4Q"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default MoviePlayer;
