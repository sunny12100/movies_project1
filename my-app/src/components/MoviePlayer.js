import React from "react";
import ReactPlayer from "react-player";
import { login_bg } from "../utils/constants";

const MoviePlayer = () => {
  return (
    <div className="media-player aspect-video z-0 ">
      <img src={login_bg} alt="" className="fixed z-0 opacity-90" />
      <div className="pt-[15%] pl-[30%] absolute z-0">
        <h1 className=" absolute  text-6xl bg-gradient-to-t from-black  text-white -mt-28 ml-28">
          MEDIA PLAYER
        </h1>
        <ReactPlayer
          className="aspect-video w-[50%] h-[50%] "
          url="https://www.youtube.com/watch?v=WO2b03Zdu4Q"
          controls
        />
      </div>
    </div>
  );
};

export default MoviePlayer;
