import { useEffect, useState } from "react";

interface ProjectProps {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  projectBackground: string;
}

export default function Project({
  projectTitle,
  projectDescription,
  projectImage,
  projectBackground
}: ProjectProps) {

  return (
    <button
      onClick={() => console.log(projectBackground)}
      className="group flex flex-col bg-darkbase rounded-2xl w-full h-max justify-center items-center transition-all rg:max-w-none max-w-lg rg:flex-row"
    >
      <div className="absolute rg:max-w-[1034px] rg:h-[370px] h-[630px] max-w-[592px] w-full rg:w-full px-10 -z-10">
        <div className="blur-md bg-darkbase opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full">
          <div className={`${projectBackground} rg:h-[370px] h-[350px] max-w-[592px] rg:max-w-[525px] w-full rg:px-0`}/>
        </div>
      </div>
      <div className={`${projectBackground} w-full h-[360px] max-w-[530px] rounded-2xl transition-colors duration-300`}>
        <img
          className="flex rg:w-[532px] w-full h-full rounded-lg"
          src="#"
          alt="imagem do projeto"
        />
      </div>
      <div className="flex flex-col rg:h-max h-[250px] p-4 mb-2 gap-8 max-h-80">
        <div className="flex flex-col h-full justify-evenly items-center rg: gap-4">
          <h1 className="text-base font-semibold uppercase text-center">
            {projectTitle}
          </h1>
          <span className="text-center text-zinc-300 text-base">
            {projectDescription}
          </span>
        </div>
      </div>
    </button>
  );
}
