export default function About() {
    return (
        <div className="flex w-full justify-center items-center bg-darkbase">
            <div className="flex flex-col rg:flex-row max-w-5xl px-10 py-24 gap-6 align-middle">
                <div className="flex-col flex rounded-lg items-center justify-between">
                    <img src="/alex-knight-j4uuKnN43_M-unsplash.jpg" className="rg:hidden w-full h-full object-cover rounded-lg" alt="foto bonita de um pc ou codigo" />
                    <img src="/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg" className="hidden rg:flex max-w-sm h-full object-cover rounded-lg" alt="foto bonita de um pc ou codigo" />
                </div>
                <div className="gap-4 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col pb-2 gap-2">
                        <h1 className="uppercase text-blue-500 font-semibold text-base">
                            About me
                        </h1>
                        <h2 className="font-semibold text-2xl text-white">
                            Um desenvolvedor full-stack apaixonado pela cultura DevOps e computação em nuvem.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2 text-zinc-200 text-base">
                        <div className="flex flex-col gap-1 pb-2">
                            <h1 className="text-blue-500 font-medium text-sm">
                                Front-End
                            </h1>
                            <span>
                                Desde o início da faculdade foco meus estudos para a área de desenvolvimento web, começando pelo Front-end, procurando fortalecer a base de uma stack como JS, TS, HTML e CSS, e posteriormente me especializando nas tecnologias mais usadas no mercado, como React e NextJS.
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 pb-2">
                            <h1 className="text-blue-500 font-medium text-sm">
                                Back-End
                            </h1>
                            <span>
                                Após adquirir uma boa noção de Front e conceitos Web, senti a necessidade de aprender a desenvolver o Back-end para adentrar conceitos como autenticação JWT, tipos de API's, tipos de requisições, ORM's, banco de dados e outros.
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 pb-2">
                            <h1 className="text-blue-500 font-medium text-sm">
                                Cultura DevOps e Cloud
                            </h1>
                            <span>
                                Por fim, por meio de Network dentro do CESAR e do Porto Digital, tive meu primeiro contato com a cultura e foi paixão a primeira vista.
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 pb-2">
                            <span>
                                Atualmente procuro me especializar na área de cloud e automação, e no futuro me tornar um profissional indispensável para o mercado.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}