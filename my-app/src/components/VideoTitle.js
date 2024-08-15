import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-44 w-screen aspect-video pl-20 absolute z=1 bg-gradient-to-r from-black">
      <img
        className="h-1/4 w-1/4 pt-12"
        src="https://image.tmdb.org/t/p/original/o3z2RjJmSPXqEeun9sE88tzYGUT.png"
        alt=""
      />
      <p className="w-[33%] pt-4 text-white">{overview}</p>
      <div className="flex flex-row pt-6">
        <button className="w-40 h-14 text-xl rounded-lg cursor-pointer  bg-white text-black hover:bg-slate-400 font-bold ">
          Play
        </button>
        <button className="w-48 mx-5 text-xl h-14 rounded-lg cursor-pointer bg-gray-500 hover:bg-gray-400 opacity-75 text-white font-bold ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
