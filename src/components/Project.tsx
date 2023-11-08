interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    ghLink: string;
}

export default function Project({projectTitle, projectDescription, projectImage, projectLink, ghLink}: ProjectProps) {
    return(
        <div className=""> 
            <button onClick={() => console.log("A")} className="bg-red-600">
                <img src={projectImage} alt="imagem do projeto" />
            </button>
            <h1>
                {projectTitle}
            </h1>
            <span>
                {projectDescription}
            </span>
            <button onClick={() => console.log("A")}>
                Saiba mais
                {/** #2d2e32 */}
            </button>
        </div>
    )
}    