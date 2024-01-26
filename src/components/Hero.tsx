import TechIcons from "./TechIcons";
import TechStacks from "./TechStacks";

export default function Hero() {

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-5xl w-full items-center px-10 py-72">
        <div className="w-full gap-4 flex rg:max-w-none flex-col rg:flex-row justify-between items-center">
          <span>
            <span className="text-4xl text-darkmode-auxiliartext leading-[4rem] font-semibold">
              Eae tudo certo?{" "}
            </span>
            <span className="text-4xl text-darkmode-maintext leading-[4rem] font-semibold">
              Sou João Pedro Duarte. Entusiasta da tecnologia desde pequeno e na
              procura de ingressar no mercado da tecnologia!
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
