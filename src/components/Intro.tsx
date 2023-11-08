import { GithubLogo, LinkedinLogo } from "phosphor-react"
import TechIcons from "./TechIcons"

export default function About() {
    const webTechs = [
        {name: "javascript"},
        {name: "typescript"},
        {name: "react"},
        {name: "nextjs"},
        {name: "nodejs"},
        {name: "express"},
        {name: "python"},
        {name: "fastapi"},
        {name: "mysql"},
    ]
    const devopsTechs = [
        {name: "docker"},
        {name: "kubernetes"},
        {name: "git"},
        {name: "gitlab"},
        {name: "githubactions"},
        {name: "jenkins"},
        {name: "gcp"},
        {name: "aws"},
        {name: "bash"},
        {name: "linux"},
    ]

    return(
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col max-w-5xl items-center px-10 pb-20 rg:pt-[76px] pt-[72px]">
                <div className="text-center w-full rg:gap-24 gap-4 flex flex-col rg:flex-row justify-between items-center">
                    <div className="flex-1 flex justify-center">
                        <div className="flex h-min border-2 rounded-full">
                            <img className="w-72 h-max object-contain rounded-full" src="/foto-criador2.jpg" alt="Imagem do criador" />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-lg rg:pr-0 px-8 gap-7 items-center justify-center">
                        <div className="flex flex-col max-w-[592px] gap-2">
                            <h1 className="text-5xl text leading-[4rem] font-semibold rg:text-right">Full-Stack JS Cloud Developer</h1>
                            <div className="flex flex-col justify-center">
                                <span className="font-light text-lg max-w-[500px] text-gray-200 rg:text-right">
                                    Eae tudo certo? Sou João Pedro Duarte. Entusiasta da tecnologia desde pequeno!
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 items-center justify-center rg:justify-end">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-green-400 duration-300" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-green-400 transition-colors duration-300" width="38" height="38" fill="#fff" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full pt-16 gap-8 items-center align-middle">
                    <div className="w-full align-middle justify-center flex">
                        <h2 className="w-max text-center">Tech Stacks</h2>
                    </div>
                    <div className="border-l-2 rg:border-0 rg:pl-0 border-lightgray pl-6 gap-8 flex flex-col">
                        <div className="flex-col flex rg:flex-row gap-4 rg:gap-0 justify-center">
                            <h2 className="font-light pr-6 py-2 rg:border-r-2">Web stack</h2>
                            <div className="grid mb6:grid-cols-9 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-4 p-0">
                                {webTechs.map((tech) => {
                                    return(
                                        <TechIcons tech={tech} key={tech.name} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex-col flex rg:flex-row gap-4 rg:gap-0">
                            <h2 className="rg:max-w-[164px] rg:w-full font-light pr-6 py-2 rg:border-r-2">DevOps stack</h2>
                            <div className="grid mb6:grid-cols-10 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-4 p-0">
                                {devopsTechs.map((tech) => {
                                    return(
                                        <TechIcons tech={tech} key={tech.name} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}