import { Moon } from "@phosphor-icons/react";
import { useState } from "react";
import NavIcon from "./NavIcon";

interface HeaderProps {
  titleContent?: string;
}

export default function Header({titleContent = ""}: HeaderProps) {
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const [title, setTitle] = useState(titleContent);
  
  function handleScroll() {
    if (window.scrollY > 60) {
      setIsHeaderMinimized(true);
      if (titleContent != "") {
        titleDrop();
      }
    } else {
      setIsHeaderMinimized(false);
    }
  }

  function titleDrop() {
    setTitle(titleContent);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`${
        isHeaderMinimized ? "py-3" : "py-10 border-b-transparent"
      } border-b border-lightbase transition-all duration-500 bg-darkmode-bg w-full fixed z-50 
      flex justify-center align-middle backdrop-filter backdrop-blur-md bg-opacity-10`}
    >
      <nav className="flex justify-between max-w-5xl w-full px-10 items-center">
        <div>
          <a href="/">Jpds.dev</a>
        </div>
        {
          title == "" ? "" : <title> + title + </title>
        }
        <div className="flex gap-3">
          <NavIcon icon={<Moon size={24} />} />
        </div>
      </nav>
    </header>
  );
}
