import TechIcons from "./TechIcons";

export default function Hero() {
  const webTechs = [
    { name: "javascript" },
    { name: "typescript" },
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
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-5xl w-full items-center px-10 pb-24 rg:pt-28 pt-[72px]">
        <div className="w-full gap-4 flex rg:max-w-none flex-col rg:flex-row justify-between items-center">
          <span>
            <span className="text-4xl text-darkmode-auxiliartext leading-[4rem] font-medium">
              Eae tudo certo?{" "}
            </span>
            <span className="text-4xl text-darkmode-maintext leading-[4rem] font-semibold">
              Sou João Pedro Duarte. Entusiasta da tecnologia desde pequeno e na
              procura de ingressar no mercado da tecnologia!
            </span>
          </span>
        </div>
        <div className="flex flex-col w-full pt-16 gap-8 items-center align-middle">
          <div className="w-full align-middle justify-center flex">
            <h2 className="w-max text-center">Tech Stacks</h2>
          </div>
          <div className="border-l-2 rg:border-0 rg:pl-0 border-lightgray pl-6 gap-8 flex flex-col">
            <div className="flex-col flex rg:flex-row gap-4 rg:gap-0 justify-center pr-[31px]">
              <h2 className="font-light pr-6 py-2 rg:border-r-2">Web stack</h2>
              <div className="grid mb6:grid-cols-9 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-[16px] p-0">
                {webTechs.map((tech) => {
                  return <TechIcons tech={tech} key={tech.name} />;
                })}
              </div>
            </div>
            <div className="flex-col flex rg:flex-row gap-4 rg:gap-0">
              <h2 className="rg:max-w-[156px] rg:w-full font-light pr-6 py-2 rg:border-r-2">
                DevOps stack
              </h2>
              <div className="grid mb6:grid-cols-10 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-4 p-0">
                {devopsTechs.map((tech) => {
                  return <TechIcons tech={tech} key={tech.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
