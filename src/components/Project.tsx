interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    ghLink: string;
}

export default function Project({projectTitle, projectDescription, projectImage, projectLink, ghLink}: ProjectProps) {
    return(
        <div onClick={() => console.log("A")} className="flex flex-col p-8 gap-4 bg-darkbase rounded-lg w-full h-max justify-center items-center shadow-md max-w-lg">
            <button className="bg-green-800 w-full h-64 rounded-lg p-10 hover:bg-green-400 transition-colors duration-300">
                {
                   // <img src={projectImage} alt="imagem do projeto" />
                }
            </button>
            <h1>
                {projectTitle}
            </h1>
            <span className="text-center">
                {projectDescription}
            </span>
            <button onClick={() => console.log("A")} className="hover:text-green-400 transition-colors duration-300">
                Saiba mais
                {/** #2d2e32 */}
            </button>
        </div>
    )
}    