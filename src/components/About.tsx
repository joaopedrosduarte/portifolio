import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className={`${theme == "light"? "bg-lightmode-lightbase" : "bg-darkmode-darkbase"} flex max-h-fit justify-center items-center`}>
      <div className="flex max-w-5xl flex-col items-center py-24 px-10">
        <div className="flex rg:flex-row gap-20 flex-col h-max">
          <div className="rg:flex hidden h-auto">
            <img
              src="/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg"
              className="object-cover max-w-sm hidden rg:flex rounded-lg"
              alt="pcfoto1"
            />
          </div>
          <div className={`${theme == "light"? "text-lightmode-maintext" : "text-darkmode-maintext"} flex flex-col gap-4 h-max text-lg`}>
            <h1 className="pb-3 text-blue-500 font-bold text-[26px]">
              About me
            </h1>
            <span className="font-normal">
              Um desenvolvedor full-stack apaixonado pela cultura DevOps e
              computação em nuvem.
            </span>
            <span className="font-normal">
              Desde o início da faculdade foco meus estudos para a área de
              desenvolvimento web, começando pelo Front-end, procurando
              fortalecer a base como JS, TS, HTML e CSS, e posteriormente me
              especializando nas tecnologias mais usadas no mercado, como React
              e NextJS.
            </span>
            <span className="font-normal">
              Após adquirir uma boa noção de Front e conceitos Web, senti a
              necessidade de aprender o desenvolvimento do Back-end para
              adentrar conceitos como autenticação JWT, tipos de API's, tipos de
              requisições, ORM's, banco de dados e outros, algo que foi muito
              importante para o entendimento de estruturas Cloud no futuro.
            </span>
            <span className="font-normal">
              Por fim, por meio de Network dentro do CESAR e do Porto Digital,
              tive meu primeiro contato com a cultura e foi paixão a primeira
              vista.
            </span>
            <span className="font-normal">
              Atualmente procuro me especializar na área de cloud e automação, e
              no futuro me tornar um profissional indispensável para o mercado.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
