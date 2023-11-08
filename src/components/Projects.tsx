import Project from "./Project"

export default function Projects() {
    return (
        <div className="flex flex-col px-10 py-16 gap-2">
            <h1>Projects</h1>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
            {/* TODO: iterar banco com os projetos */}
            <Project ghLink="#" projectDescription="miau" projectImage="#" projectLink="miau" projectTitle="teste" />
        </div>
    )
}
