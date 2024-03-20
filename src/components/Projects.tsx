import useProjects from "../hooks/useProject";
import LoadingComponent from "./LoadingComponent";
import EmptyComponent from "./EmptyComponent";
import ErrorComponent from "./ErrorComponent";
import { useState } from "react";
import Project from "./Project";
import useTheme from "../hooks/useTheme";

export default function Projects() {
  const { data, isLoading, isError, isSuccess } = useProjects();
  const [projectHovered, setProjectHovered] = useState("");
  const { theme } = useTheme();

  if (isLoading) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  if (isSuccess && data.length === 0) return <EmptyComponent />;

  if (isSuccess) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full max-w-5xl flex-col px-10 py-28 gap-8 align-middle">
          <div className="flex flex-col gap-2 mb4:text-left text-center">
            <h1 className="text-blue-500 font-bold text-[26px]">Projects</h1>
            <span className={`${theme == "light"? "text-zinc-700" : "text-darkmode-maintext"} font-semibold text-xl pb-4`}>
              Cada projeto que fez parte da minha caminhada, até agora. 😉
            </span>
          </div>
          <div className="flex flex-col gap-12 items-center">
            {data.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                theme={theme}
                title={project.title}
                description={project.description}
                image={"./portifolio.png"}
                ghLink={"#"}
                liveLink={"#"}
                tools={project.tools}
                projectHovered={projectHovered}
                onSetProjectHovered={setProjectHovered}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
