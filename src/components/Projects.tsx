import Project from "./Project"

export default function Projects() {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex w-full max-w-5xl flex-col px-10 py-24 gap-8 align-middle">
                <div className="flex flex-col gap-2 mb4:text-left text-center">
                    <h1 className="uppercase text-green-500 font-bold text-base">
                        Projects
                    </h1>
                    <span className="font-semibold text-2xl pb-4 text-white">
                        Cada projeto que fez parte da minha caminhada, até agora. 😉
                    </span>
                </div>
                {/* TODO: iterar banco com os projetos */}
                <div className="flex flex-col gap-16 items-center">
                    <Project ghLink="#" projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?" projectImage="#" projectLink="miau" projectTitle="Projeto 1" />
                    <Project ghLink="#" projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! " projectImage="#" projectLink="miau" projectTitle="Projeto 2" />
                </div>
            </div>
        </div>
    )
}
