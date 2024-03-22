import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { ProjectType } from "../types/Project";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tool from "./Tools";

interface ProjectProps extends ProjectType {
  theme: string;
  projectHovered: string;
  onSetProjectHovered: (value: string) => void;
}

export default function Project({
  id,
  theme,
  title,
  description,
  githubUrl,
  liveUrl,
  image,
  tools,
  projectHovered,
  onSetProjectHovered,
}: ProjectProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [linkHovered, setLinkHovered] = useState("");
  const [isBlured, setIsBlured] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    if (windowWidth < 736) return;

    if (projectHovered != id && projectHovered != "") {
      setIsBlured(true);
    } else {
      setIsBlured(false);
    }
  }, [id, projectHovered, windowWidth]);

  function handleMouseEnter() {
    onSetProjectHovered(id);
    setLinkHovered("live");
  }

  function handleMouseLeave() {
    onSetProjectHovered("");
    setLinkHovered("");
  }

  return windowWidth < 736 ? (
    <div
      className={`group/container flex mb3:scale-105 w-full transition-all border-transparent duration-200 gap-6 border-t p-8 rounded-lg flex-col`}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap gap-1.5 items-center justify-between">
          <a
            href={liveUrl}
            target="_blank"
            className={`${
              theme == "light"
                ? "text-zinc-700 hover:text-blue-600"
                : "hover:text-blue-500 text-darkmode-maintext"
            } group/title flex items-center gap-1 font-medium transition-colors duration-200 text-base leading-[22px]`}
          >
            <h1>{title}</h1>
            <div className="flex pt-1">
              <ArrowUpRight
                weight="bold"
                className={`group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-transform h-full`}
                size={18}
              />
            </div>
          </a>
          <div className="hidden mb3:flex items-center transition-colors text-darkmode-maintext">
            <a
              href={githubUrl}
              target="_blank"
              className={`${
                theme == "light"
                  ? "text-lightmode-auxiliartext hover:text-blue-600"
                  : "text-darkmode-auxiliartext hover:text-blue-500"
              } duration-200 transition-colors flex items-center justify-center pt-1`}
            >
              <GithubLogo weight="regular" size={18} className="pb-0.5" />
              <h1 className="font-normal text-base block">Github</h1>
            </a>
          </div>
          <span
            className={`${
              theme == "light"
                ? "text-lightmode-auxiliartext"
                : "text-darkmode-auxiliartext"
            } font-normal text-sm leading-[21px] text-darkmode-auxiliartext`}
          >
            {description}
          </span>
          <div className="flex mb3:hidden items-center pt-1.5 pb-px transition-colors text-darkmode-maintext">
            <a
              href={githubUrl}
              target="_blank"
              className={`${
                theme == "light"
                  ? "text-lightmode-auxiliartext hover:text-blue-600"
                  : "text-darkmode-auxiliartext hover:text-blue-500"
              } duration-200 transition-colors flex items-center justify-center pt-1`}
            >
              <GithubLogo weight="regular" size={18} className="pb-0.5" />
              <h1 className="font-normal text-base block">Github</h1>
            </a>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <Tool theme={theme} key={tool.id} name={tool.name} />
          ))}
        </div>
      </div>
      <div
        className={`${
          theme == "light"
            ? "group-hover/container:border-lightmode-darkbase border-lightmode-lightbase"
            : "group-hover/container:border-darkmode-lightbase border-darkmode-darkbase"
        } flex transition-colors duration-200 border-2 h-64 mb3:h-80 flex-col rounded-lg overflow-hidden`}
      >
        <img src={image} className="w-full object-cover" />
      </div>
    </div>
  ) : (
    <a
      href={liveUrl}
      target="_blank"
      className={`${
        isBlured ? "opacity-45" : ""
      } flex scale-105 group w-full transition-all border-transparent 
      duration-200 gap-6 border-t p-8 rounded-lg flex-row 
    ${
      theme == "light"
        ? "hover:bg-zinc-200/10 hover:border-t-slate-200 hover:shadow-black/20 hover:shadow-md"
        : "hover:bg-darkmode-lightbase/20 hover:border-t-darkmode-lightbase/40 hover:shadow-black/10 hover:shadow-md"
    }`}
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
    >
      <div
        className={`${
          theme == "light"
            ? "border-lightmode-lightbase"
            : "border-darkmode-lightbase"
        } h-32 transition-colors border-2 duration-200 overflow-hidden rounded-lg flex-col mb6:flex`}
      >
        <motion.img
          whileHover={{
            translateY: "calc(-100% + 144px)",
            transition: { duration: 15 },
          }}
          src={image}
          className="w-48 object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap gap-1.5 items-center justify-between">
          <div className="flex justify-between w-full">
            <div
              className={`${
                linkHovered == "live"
                  ? theme == "light"
                    ? "text-zinc-700 group-hover:text-blue-500"
                    : "text-darkmode-maintext group-hover:text-blue-500"
                  : theme == "light"
                    ? "text-zinc-700"
                    : "text-darkmode-maintext"
              } flex items-center gap-1 font-medium transition-colors duration-200 text-base leading-[22px]`}
            >
              <h1>{title}</h1>
              <div className="flex pt-1">
                <ArrowUpRight
                  weight="bold"
                  className={`${
                    linkHovered == "live" ? "translate-x-1 -translate-y-1" : ""
                  } transition-transform h-full`}
                  size={18}
                />
              </div>
            </div>
            <div
              className={`${
                theme == "light"
                  ? "text-lightmode-auxiliartext hover:text-blue-600"
                  : "text-darkmode-auxiliartext hover:text-blue-500"
              } flex items-center transition-colors`}
              onMouseEnter={() => setLinkHovered("github")}
              onMouseLeave={() => setLinkHovered("live")}
            >
              <a
                href={githubUrl}
                target="_blank"
                className="flex items-center justify-center pt-1"
              >
                <GithubLogo weight="regular" size={18} className="pb-0.5" />
                <h1 className="font-normal text-base block">Github</h1>
              </a>
            </div>
          </div>
          <span
            className={`${
              theme == "light"
                ? "text-lightmode-auxiliartext"
                : "text-darkmode-auxiliartext"
            } font-normal text-sm leading-[21px] text-darkmode-auxiliartext`}
          >
            {description}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <Tool key={tool.id} theme={theme} name={tool.name} />
          ))}
        </div>
      </div>
    </a>
  );
}
