import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tool from "./Tools";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  ghLink: string;
  liveLink: string;
  projectHovered: string;
  onSetProjectHovered: (value: string) => void;
}

export default function Project({
  id,
  title,
  description,
  image,
  ghLink,
  liveLink,
  tools,
  projectHovered,
  onSetProjectHovered,
}: ProjectProps) {
  const [linkHovered, setLinkHovered] = useState("");
  const [isBlured, setIsBlured] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      className={`flex mb3:scale-105 w-full transition-all border-transparent duration-200 gap-6 border-t p-8 rounded-lg flex-col`}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap gap-1.5 items-center justify-between">
          <a
            href={liveLink}
            className={`group hover:text-blue-500 flex items-center gap-1 font-medium transition-colors duration-200 text-base leading-[22px]`}
          >
            <h1>{title}</h1>
            <div className="flex pt-1">
              <ArrowUpRight
                weight="bold"
                className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform h-full`}
                size={18}
              />
            </div>
          </a>
          <div className="hidden mb3:flex items-center hover:text-blue-500 transition-colors text-darkmode-maintext">
            <a href={ghLink} className="flex items-center justify-center pt-1">
              <GithubLogo weight="regular" size={18} className="pb-0.5" />
              <h1 className="font-normal text-base block">Github</h1>
            </a>
          </div>
          <span className="font-normal text-sm leading-[21px] text-darkmode-auxiliartext">
            {description}
          </span>
          <div className="flex mb3:hidden items-center pt-1.5 pb-px hover:text-blue-500 transition-colors text-darkmode-maintext">
            <a href={ghLink} className="flex items-center justify-center">
              <GithubLogo weight="regular" size={18} className="pb-0.5" />
              <h1 className="font-normal text-sm block">Github</h1>
            </a>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <Tool key={tool} name={tool} />
          ))}
        </div>
      </div>
      <div className="flex border-2 h-64 mb3:h-80 flex-col border-darkbase group-hover:border-lightbase rounded-lg overflow-hidden">
        <img src={image} className="w-full object-cover" />
      </div>
    </div>
  ) : (
    <a
      href={liveLink}
      className={`${
        isBlured ? "opacity-50" : ""
      } flex scale-105 group w-full transition-all border-transparent
      duration-200 gap-6 border-t p-8 rounded-lg flex-row
      hover:bg-lightbase/20 hover:border-t-lightbase/40 
      hover:shadow-projectshadow hover:shadow-black/10`}
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
    >
      <div className="h-32 transition-colors border-lightbase border-2 duration-200 overflow-hidden rounded-lg flex-col mb6:flex">
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
          <div
            className={`${
              linkHovered == "live" ? "text-blue-400" : "text-darkmode-maintext"
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
            className="flex items-center hover:text-blue-500 transition-colors text-darkmode-maintext"
            onMouseEnter={() => setLinkHovered("github")}
            onMouseLeave={() => setLinkHovered("live")}
          >
            <a href={ghLink} className="flex items-center justify-center pt-1">
              <GithubLogo weight="regular" size={18} className="pb-0.5" />
              <h1 className="font-normal text-base block">Github</h1>
            </a>
          </div>
          <span className="font-normal text-sm leading-[21px] text-darkmode-auxiliartext">
            {description}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <Tool key={tool} name={tool} />
          ))}
        </div>
      </div>
    </a>
  );
}
