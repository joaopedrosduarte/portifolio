import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStacks from "../components/TechStacks";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const { theme } = useTheme();
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
    <div className={`${theme == "light"? "bg-lightmode-bg" : "bg-darkmode-bg"} m-auto max-[calc(100%-2rem)] text-white text-xl`}>
      <Header />
      <main className="w-full pt-56">
        <Hero />
        <About />
        <TechStacks devopsTechs={devopsTechs} webTechs={webTechs} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}