import Project from "./Project"

export default function Projects() {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col max-w-5xl px-10 py-16 gap-8 align-middle">
                <div className="flex flex-col gap-2">
                    <h1 className="uppercase text-green-400 font-semibold text-base">
                        Projects
                    </h1>
                    <span className="font-bold text-2xl pb-4 text-white">
                        Cada projeto que fez parte da minha caminhada, até agora. 😉
                    </span>
                </div>
                {/* TODO: iterar banco com os projetos */}
                <div className="flex flex-col gap-16 items-center">
                    <Project ghLink="#" projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?" projectImage="#" projectLink="miau" projectTitle="Projeto 1" />
                    <Project ghLink="#" projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque debitis error illo quia quisquam accusamus. Iusto impedit quis libero, veritatis non exercitationem soluta eaque eius! Magnam neque odio earum?" projectImage="#" projectLink="miau" projectTitle="Projeto 2" />
                </div>
            </div>
        </div>
    )
}
