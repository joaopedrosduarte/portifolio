import { useState } from "react";
import { Command, Moon } from "phosphor-react";
import NavIcon from "./NavIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  function handleScroll() {
    if (window.scrollY > 60) {
      setIsHeaderMinimized(true);
    } else {
      setIsHeaderMinimized(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`${ isHeaderMinimized ? "py-3" : "py-12 border-b-transparent" } border-b border-lightbase transition-all duration-500 bg-darkmode-bg w-full fixed z-50 flex justify-center align-middle backdrop-filter backdrop-blur-md bg-opacity-10`}>
      <nav className="flex justify-between max-w-5xl w-full px-10 items-center">
        <h1>
          <a href="/">Jpds.dev</a>
        </h1>
        <div className="flex gap-3">
          <NavIcon icon={<Command size={24} />} doFunc={() => setIsMenuOpen(!isMenuOpen)} />
          <NavIcon icon={<Moon size={24} />} doFunc={() => setIsMenuOpen(!setIsDarkMode)} />
        </div>
      </nav>
    </header>
  );
}
