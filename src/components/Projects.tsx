import ProjectSectionHeader from "./ProjectSectionHeader";
import useProjects from "../hooks/useProjects";
import LoadingComponent from "./LoadingComponent";
import EmptyComponent from "./EmptyComponent";
import ErrorComponent from "./ErrorComponent";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import Project from "./Project";

export default function Projects() {
  const { data, isLoading, isError, isSuccess } = useProjects();
  const [projectHovered, setProjectHovered] = useState("");
  const { theme } = useTheme();

  if (isLoading) return <LoadingComponent theme={theme} />;

  if (isError) return <ErrorComponent theme={theme} />;

  if (isSuccess) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full max-w-5xl flex-col px-10 pt-40 gap-8 align-middle">
          <ProjectSectionHeader theme={theme}/>
          <div className="flex flex-col gap-12 items-center">
            {
              data.length === 0 ? 
                <EmptyComponent theme={theme} /> 
              : 
                data.map((project) => {
                  return(
                    <Project
                      key={project.id}
                      id={project.id}
                      theme={theme}
                      title={project.title}
                      description={project.description}
                      image={"./portifolio.png"}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      tools={project.tools}
                      projectHovered={projectHovered}
                      onSetProjectHovered={setProjectHovered}
                    />
                  )
                })}
          </div>
        </div>
      </div>
    );
  }
}
