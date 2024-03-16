import useProjects from "../hooks/useProject";
import LoadingComponent from "./LoadingComponent";
import EmptyComponent from "./EmptyComponent";
import ErrorComponent from "./ErrorComponent";
import { useState } from "react";
import Project from "./Project";

export default function Projects() {
  const { data, isLoading, isError, isSuccess } = useProjects();
  const [projectHovered, setProjectHovered] = useState("");

  if (isLoading) return <LoadingComponent />;

  if (isError) return <ErrorComponent />;

  if (isSuccess && data.length === 0) return <EmptyComponent />;

  if (isSuccess) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full max-w-5xl flex-col px-10 pt-28 pb-32 gap-14 align-middle">
          <div className="flex flex-col gap-2 mb4:text-left text-center">
            <h1 className="text-blue-500 font-bold text-[26px]">Projects</h1>
            <span className="font-semibold text-xl pb-8 text-darkmode-maintext">
              Cada projeto que fez parte da minha caminhada, até agora. 😉
            </span>
          </div>
          <div className="flex flex-col gap-12 items-center">
            {data.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                ghLink={project.ghlink}
                liveLink={project.liveLink}
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
