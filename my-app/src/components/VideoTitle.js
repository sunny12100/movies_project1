import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-44 w-screen aspect-video pl-6 md:pl-20 absolute z=1 bg-gradient-to-r from-black">
      <h1 className="md:hidden text-xl absolute text-white font-bold -mt-52">
        {title}
      </h1>
      <img
        className="h-[20%] w-[40%] hidden md:block md:h-1/4 md:w-1/4 pt-12 "
        src="https://image.tmdb.org/t/p/original/o3z2RjJmSPXqEeun9sE88tzYGUT.png"
        alt=""
      />
      <p className="hidden md:inline-block w-[33%] pt-4 text-white">
        {overview}
      </p>
      <div className="flex flex-row md:pt-6 pt-0">
        <button className="w-24 h-10  md:w-40 md:h-14 text-xl rounded-lg cursor-pointer  bg-white text-black hover:bg-slate-400 font-bold ">
          Play
        </button>
        <button className="hidden md:block w-48 mx-5 text-xl h-14 rounded-lg cursor-pointer bg-gray-500 hover:bg-gray-400 opacity-75 text-white font-bold ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
