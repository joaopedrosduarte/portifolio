import Project from "./Project";

export default function Projects() {
  const projects = [1];
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full max-w-5xl flex-col px-10 py-28 gap-14 align-middle">
        {projects.length === 0 ? (
          <div className="flex flex-col gap-2 mb4:text-center text-center">
            <span className="font-semibold text-2xl text-darkmode-maintext">
              Os Projetos estão sendo atualizados e em breve estarão disponíveis! 😁
            </span>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 mb4:text-left text-center">
              <h1 className="text-blue-500 font-bold text-[26px]">
                Projects
              </h1>
              <span className="font-semibold text-xl pb-4 text-darkmode-maintext">
                Cada projeto que fez parte da minha caminhada, até agora. 😉
              </span>
            </div>
            <div className="flex flex-col gap-24 items-center">
              {/* FAZER UM MAP RELACIONADO COM O BANCO */}
              <Project
                projectId="A"
                projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?"
                projectImage="#"
                projectTitle="Projeto 1"
                projectBackground="bg-[#1d4ed8]"
              />
              <Project
                projectId="B"
                projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?"
                projectImage="#"
                projectTitle="Projeto 2"
                projectBackground="bg-[#6d28d9]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
