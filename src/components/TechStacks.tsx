import useTheme from "../hooks/useTheme";
import TechIcons from "./TechIcons";

interface Tech {
  name: string;
}

interface TechStacksProps {
  webTechs: Tech[];
  devopsTechs: Tech[];
}

export default function TechStacks({ webTechs, devopsTechs }: TechStacksProps) {
  const { theme } = useTheme();
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col max-w-5xl w-full gap-16 px-10 pt-32">
        <div className="w-full flex flex-col gap-2 mb4:items-start items-center">
          <h1 className="pl-[2px] mb4:text-left text-center font-bold text-blue-500 text-[26px]">
            Tech Stacks
          </h1>
          <h2
            className={`${
              theme == "light" ? "text-zinc-700" : "text-darkmode-maintext"
            } font-semibold mb4:text-left text-center text-xl`}
          >
            As principais tecnologias que uso no meu dia a dia.
          </h2>
        </div>
        <div
          className={`${
            theme == "light" ? "border-zinc-400" : "border-darkmode-lightbase"
          } border-l-2 rg:border-0 border-lightgray rg:pl-0 pl-6 gap-8 w-max flex flex-col`}
        >
          <div className="flex-col flex rg:flex-row gap-4 rg:gap-0">
            <h2
              className={`${
                theme == "light"
                  ? "text-zinc-700 border-lightmode-lightgray"
                  : "text-darkmode-maintext border-darkmode-lightbase"
              } rg:max-w-[158px] rg:w-full font-normal pr-6 py-2 rg:border-r-2 border-lightgray text-darkmode-maintext`}
            >
              DevOps stack
            </h2>
            <div className="grid mb6:grid-cols-10 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-4 p-0">
              {devopsTechs.map((tech) => {
                return <TechIcons tech={tech} key={tech.name} />;
              })}
            </div>
          </div>
          <div className="flex-col flex rg:flex-row gap-4 rg:gap-0 pr-[31px]">
            <h2
              className={`${
                theme == "light"
                  ? "text-zinc-700 border-lightmode-lightgray"
                  : "text-darkmode-maintext border-darkmode-lightbase"
              } text-left font-normal pr-[57.5px] py-2 rg:border-r-2 text-darkmode-maintext text-xl`}
            >
              Web stack
            </h2>
            <div className="grid mb6:grid-cols-9 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-[16px] p-0">
              {webTechs.map((tech) => {
                return <TechIcons tech={tech} key={tech.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
