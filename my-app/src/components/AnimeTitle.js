import React from "react";

const AnimeTitle = () => {
  return (
    <div className="pt-44 w-screen aspect-video pl-20 absolute z=1 bg-gradient-to-r from-black">
      <img
        className="h-[22%] w-[33%] pt-12"
        src="https://www.ki-oon.com/medias/ckefinder/images/logos/Logo-Frieren.png"
        alt=""
      />
      <p className="w-[33%] pt-4 text-white">
        Frieren: Beyond Journey End sees its heroes staring Happily Ever After
        in the face, reveling in the culmination of their long struggle. The
        Demon King is dead, statues are being made for them. Frieren, an elf of
        inconceivably long life, seems to take it for granted, because the past
        10 years barely register on the rather immense scale on which she
        considers things.
      </p>
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

export default AnimeTitle;
