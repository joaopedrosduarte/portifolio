import TechStacks from "./TechStacks";

export default function About() {
  const webTechs = [
    { name: "typescript" },
    { name: "javascript" },
    { name: "react" },
    { name: "nextjs" },
    { name: "nodejs" },
    { name: "express" },
    { name: "python" },
    { name: "fastapi" },
    { name: "mysql" },
  ];
  const devopsTechs = [
    { name: "docker" },
    { name: "kubernetes" },
    { name: "git" },
    { name: "gitlab" },
    { name: "githubactions" },
    { name: "jenkins" },
    { name: "gcp" },
    { name: "aws" },
    { name: "bash" },
    { name: "linux" },
  ];

  return (
    <div className="flex max-h-fit justify-center items-center bg-darkbase">
      <div className="flex max-w-5xl flex-col items-center py-24 px-10">
        <div className="flex rg:flex-row gap-20 flex-col h-max">
          <div className="rg:flex hidden h-auto">
            <img
              src="/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg"
              className="object-cover max-w-sm hidden rg:flex rounded-lg"
              alt="pcfoto1"
            />
          </div>
          <div className="flex flex-col gap-4 h-max text-darkmode-maintext text-lg">
            <h1 className="pb-3 text-blue-500 font-bold text-[26px]">
              About me
            </h1>
            <span className="font-light">
              Um desenvolvedor full-stack apaixonado pela cultura DevOps e
              computação em nuvem.
            </span>
            <span className="font-light">
              Desde o início da faculdade foco meus estudos para a área de
              desenvolvimento web, começando pelo Front-end, procurando
              fortalecer a base como JS, TS, HTML e CSS, e posteriormente me
              especializando nas tecnologias mais usadas no mercado, como React
              e NextJS.
            </span>
            <span className="font-light">
              Após adquirir uma boa noção de Front e conceitos Web, senti a
              necessidade de aprender o desenvolvimento do Back-end para
              adentrar conceitos como autenticação JWT, tipos de API's, tipos de
              requisições, ORM's, banco de dados e outros, algo que foi muito
              importante para o entendimento de estruturas Cloud no futuro.
            </span>
            <span className="font-light">
              Por fim, por meio de Network dentro do CESAR e do Porto Digital,
              tive meu primeiro contato com a cultura e foi paixão a primeira
              vista.
            </span>
            <span className="font-light">
              Atualmente procuro me especializar na área de cloud e automação, e
              no futuro me tornar um profissional indispensável para o mercado.
            </span>
          </div>
        </div>
        <TechStacks devopsTechs={devopsTechs} webTechs={webTechs} />
      </div>
    </div>
  );
}
