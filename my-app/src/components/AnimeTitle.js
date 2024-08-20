import React from "react";

const AnimeTitle = ({ title }) => {
  return (
    <div className="pt-44 w-screen aspect-video pl-6 md:pl-20 absolute z=1 bg-gradient-to-r from-black">
      <h1 className="md:hidden text-xl absolute text-white font-bold -mt-52">
        {title}
      </h1>
      <img
        className="hidden md:inline-block h-[22%] w-[33%] pt-12"
        src="https://www.ki-oon.com/medias/ckefinder/images/logos/Logo-Frieren.png"
        alt=""
      />
      <p className="hidden md:inline-block md:w-[33%] pt-4 text-white">
        Frieren: Beyond Journey End sees its heroes staring Happily Ever After
        in the face, reveling in the culmination of their long struggle. The
        Demon King is dead, statues are being made for them. Frieren, an elf of
        inconceivably long life, seems to take it for granted, because the past
        10 years barely register on the rather immense scale on which she
        considers things.
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

export default AnimeTitle;
