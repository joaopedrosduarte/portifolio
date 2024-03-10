import About from "../components/About";
import ColorLoader from "../components/ColorLoader";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="m-auto max-[calc(100%-2rem)] text-white text-xl">
      <Header />
      <ColorLoader />
      <main className="w-full pt-56">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}