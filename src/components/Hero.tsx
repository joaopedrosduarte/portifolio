import { DownloadSimple, LinkedinLogo } from "@phosphor-icons/react";
import HeroButton from "./HeroButton";
import useTheme from "../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();
  const windowWidth = window.innerWidth;

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-5xl w-full items-center px-10 pb-48">
        <div className="w-full gap-16 flex flex-col justify-between items-center">
          <span className="flex flex-col gap-3">
            <span
              className={`${
                theme == "light"
                  ? "text-lightmode-auxiliartext"
                  : "text-darkmode-auxiliartext"
              } text-4xl leading-[4rem] font-semibold`}
            >
              Eae tudo certo? 👋🏼{" "}
            </span>
            <span
              className={`text-3xl ${
                theme == "light"
                  ? "text-lightmode-maintext"
                  : "text-darkmode-maintext"
              } leading-[3rem] font-semibold`}
            >
              Sou João Pedro Duarte, um brasileiro 🇧🇷 entusiasta da tecnologia
              desde pequeno 🚀 e na procura de ingressar no mercado como
              desenvolvedor Full-Stack. 👨‍💻
            </span>
          </span>
          <div className="w-full flex mb3:flex-row flex-col gap-5 justify-between align-middle">
            <HeroButton
              component={
                <DownloadSimple
                  size={windowWidth <= 608 ? 18 : 20}
                  weight="bold"
                  color="#f8fafc"
                />
              }
              //For some reason, the color of the shadow is changing with shadow-color
              //property, is changing with the color of text
              className={`${theme == "light"? "bg-blue-500 text-blue-600 hover:shadow-blue-600" : "bg-blue-600 text-blue-700 hover:shadow-blue-700"}  duration-200 hover:shadow-shinny`}
              content="Resume.pdf"
            />
            <div className="flex gap-4 mb6:gap-8 justify-evenly">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/joãopedroduarte"
                className={`${
                  theme == "light" ? "hover:text-zinc-800 text-blue-600" : "hover:text-zinc-200 text-blue-500"
                } flex gap-1 transition-all items-center cursor-pointer duration-300`}
              >
                <LinkedinLogo size={windowWidth <= 608 ? 22 : 26} />
                <div className="mb4:text-lg font-medium text-base">
                  Linkedin
                </div>
              </a>
              <a
                href="https://github.com/joaopedrosduarte"
                target="_blank"
                className={`${
                  theme == "light" ? "hover:text-zinc-800 hover:fill-zinc-800 fill-blue-600 text-blue-600" : "text-blue-500 fill-blue-500 hover:text-zinc-200 hover:fill-zinc-200"
                } flex gap-1 transition-all items-center cursor-pointer duration-300 fill-blue-500 text-blue-500`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={windowWidth <= 608 ? "22" : "26"}
                  height={windowWidth <= 608 ? "22" : "26"}
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
                <span className="mb4:text-lg font-medium text-base">
                  @joaopedrosduarte
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
