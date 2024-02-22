import Project from "./Project";

export default function Projects() {
  const projects = [];
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full max-w-6xl flex-col px-10 py-24 gap-8 align-middle">
        {projects.length === 0 ? (
          <div className="flex flex-col gap-2 mb4:text-center text-center">
            <span className="font-semibold text-2xl text-darkmode-maintext">
              Os Projetos estão sendo atualizados e em breve estarão disponíveis! 😁
            </span>
          </div>
        ) : (
          <>
            {/* FAZER UM MAP RELACIONADO COM O BANCO */}
            <div className="flex flex-col gap-2 mb4:text-left text-center">
              <h1 className="uppercase text-blue-500 font-bold text-base">
                Projects
              </h1>
              <span className="font-semibold text-2xl pb-4 text-darkmode-maintext">
                Cada projeto que fez parte da minha caminhada, até agora. 😉
              </span>
            </div>
            <div className="flex flex-col gap-16 items-center">
              <Project
                ghLink="#"
                projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?"
                projectImage="#"
                projectLink="miau"
                projectTitle="Projeto 1"
              />
              <Project
                ghLink="#"
                projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! "
                projectImage="#"
                projectLink="miau"
                projectTitle="Projeto 2"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
