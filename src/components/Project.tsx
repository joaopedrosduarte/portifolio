import { useEffect, useState } from "react";
import { previewProjectType } from "../types/previewProject";
import Button from "./Button";
import { GithubLogo, SignIn } from "@phosphor-icons/react";

interface ProjectProps extends previewProjectType {
  index: number;
}

export default function Project({
  title,
  description,
  color,
  index,
}: ProjectProps) {
  const [bg, setBg] = useState(color);
  const [buttonClassName, setButtonClassName] = useState("");

  useEffect(() => {
    setBg(color);
    switch (index) {
      case 0:
        setButtonClassName("hover:text-blue-400 hover:shadow-blue-400");
        break;
      case 1:
        setButtonClassName("hover:text-green-400 hover:shadow-green-400");
        break;
      case 2:
        setButtonClassName("hover:text-red-500 hover:shadow-red-500");
        break;
    }
  }, [color, index]);

  return (
    <div className="group z-10 flex flex-col bg-darkbase rounded-2xl w-full h-max justify-center items-center transition-all rg:max-w-none max-w-lg rg:flex-row">
      <div className="flex rg:flex-row flex-col items-center w-full">
        <div
          className={`${
            "bg-[" + bg + "]"
          } w-full h-[360px] max-w-[530px] rounded-2xl transition-colors duration-300`}
        >
          <img
            className="flex rg:w-[532px] w-full h-full rounded-lg"
            src="#"
            alt="imagem do projeto"
          />
        </div>
        <div className="flex flex-col w-full rg:h-max h-[250px] p-4 mb-2 gap-4 max-h-80">
          <div className="flex flex-col h-full justify-center items-center gap-8">
            <h1 className="text-base font-semibold text-center">
              {title}
            </h1>
            <span className="text-center text-zinc-300 text-base">
              {description}
            </span>
            <div>
              <div className="flex gap-4">
                <Button
                  content="Live"
                  className={`${buttonClassName} 
                  text-darkmode-maintext 
                    border
                  border-lightbase
                    hover:z-10
                    hover:shadow-baseblured`}
                  spanClassName="pl-0.5"
                  component={<SignIn />}
                />
                <Button
                  content="Github"
                  className={`${buttonClassName} 
                  text-darkmode-maintext 
                    border
                  border-lightbase
                    hover:z-10
                    hover:shadow-baseblured`}
                  component={<GithubLogo />}
                  spanClassName=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
