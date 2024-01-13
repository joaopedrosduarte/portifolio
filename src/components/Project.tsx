interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    ghLink: string;
}

export default function Project({projectTitle, projectDescription, projectImage, projectLink, ghLink}: ProjectProps) {
    return(
        <div onClick={() => console.log("A")} className="flex flex-col p-8 gap-8 bg-darkbase rounded-lg w-full h-max justify-center items-center shadow-baseblured rg:max-w-none max-w-lg rg:flex-row">
            <button className="bg-green-800 w-full h-[360px] max-w-[530px] rounded-lg hover:bg-green-600 transition-colors duration-300">
                <img className="max-w-[530px] w-[530px] h-full rounded-lg" src="#" alt="imagem do projeto" />
            </button>
            <div className="flex flex-col justify-between h-max gap-8 max-h-80">
                <div className="flex flex-col gap-4">
                    <h1 className="text-base font-semibold uppercase text-center">
                        {projectTitle}
                    </h1>
                    <span className="text-center text-zinc-300 text-base">
                        {projectDescription}
                    </span>
                </div>
                <button onClick={() => console.log("A")} className="hover:text-green-400 transition-colors duration-300 text-base">
                    Saiba mais
                    {/** #2d2e32 */}
                </button>
            </div>
        </div>
    )
}    