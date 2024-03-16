import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (projectHovered != id && projectHovered != "") {
      setIsBlured(true);
    } else {
      setIsBlured(false);
    }
  }, [id, projectHovered]);

  function handleMouseEnter() {
    onSetProjectHovered(id);
    setLinkHovered("live");
  }

  function handleMouseLeave() {
    onSetProjectHovered("");
    setLinkHovered("");
  }

  return (
    <a
      href="#"
      className={`${
        isBlured ? "opacity-50" : ""
      } flex group w-full scale-105 transition-all border-transparent
      duration-200 gap-6 border-t p-8 rounded-lg 
      hover:bg-lightbase/20 hover:border-t-lightbase/40 
      hover:shadow-projectshadow hover:shadow-black/10`}
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
    >
      <div className="flex flex-col">
        <div className="w-48 h-36 bg-blue-700 rounded-lg" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <div
            className={`${
              linkHovered == "live" ? "text-blue-400" : "text-darkmode-maintext"
            } flex items-end gap-1 font-medium transition-colors duration-200 text-base leading-[22px]`}
          >
            <h1>{title}</h1>
            <ArrowUpRight
              weight="bold"
              className={`${
                linkHovered == "live" ? "translate-x-1 -translate-y-1" : ""
              } pb-px transition-transform`}
              size={18}
            />
          </div>
          <div
            className="relative flex items-center hover:text-blue-500 transition-colors text-darkmode-auxiliartext"
            onMouseEnter={() => setLinkHovered("github")}
            onMouseLeave={() => setLinkHovered("live")}
          >
            <a href="#" className="flex items-center justify-center">
              <GithubLogo weight="regular" size={20} className="pb-0.5" />
              <h1 className="font-normal text-base ">Github</h1>
            </a>
          </div>
        </div>
        <span className="font-normal text-sm leading-[21px] text-darkmode-auxiliartext">
          {description}
        </span>
        <div className="mt-2 flex gap-1.5">
          {
            tools.map((tool) => (
              <Tool key={tool} name={tool} />
            ))  
          }
        </div>
      </div>
    </a>
  );
}
