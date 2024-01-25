import TechIcons from "./TechIcons"

interface Tech {
  name: string
}

interface TechStacksProps {
  webTechs: Tech[]
  devopsTechs: Tech[]
}

export default function TechStacks({webTechs, devopsTechs}:TechStacksProps) {


  return (
    <div className="pl-2 flex flex-col w-full pt-28 mt-32 border-t-2 border-blue-500 border-0 gap-8 items-center align-middle">
          <div className="w-full align-middle justify-center flex">
            <h2 className="w-max text-center pl-[2px] font-medium text-darkmode-maintext text-2xl">Tech Stacks</h2>
          </div>
          <div className="border-l-2 rg:border-0 border-lightgray rg:pl-0 pl-6 gap-8 flex flex-col">
            <div className="flex-col flex rg:flex-row gap-4 rg:gap-0 justify-center pr-[31px]">
              <h2 className="font-light pr-6 py-2 rg:border-r-2 border-lightgray text-darkmode-maintext text-xl">Web stack</h2>
              <div className="grid mb6:grid-cols-9 mb5:grid-cols-9 mb4:grid-cols-8 mb3:grid-cols-7 mb2:grid-cols-6 mb1:grid-cols-5 grid-cols-4 w-max gap-4 rg:pl-[16px] p-0">
                {webTechs.map((tech) => {
                  return <TechIcons tech={tech} key={tech.name} />;
                })}
              </div>
            </div>
            <div className="flex-col flex rg:flex-row gap-4 rg:gap-0">
              <h2 className="rg:max-w-[156px] rg:w-full font-light pr-6 py-2 rg:border-r-2 border-lightgray text-darkmode-maintext">
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
  )
}