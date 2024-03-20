import useTheme from "../hooks/useTheme";
import { useState } from "react";
import NavIcon from "./NavIcon";

interface HeaderProps {
  titleContent?: string;
}

export default function Header({titleContent = ""}: HeaderProps) {
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const { theme } = useTheme();
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
        isHeaderMinimized ? "py-3" : "py-10 border-b-transparent bg-transparent"
      } ${theme == "light" ? "border-lightmode-darkbase bg-lightmode-bg" : "border-darkmode-lightbase bg-darkmode-bg"} border-b transition-all duration-500 w-full fixed z-50 
      flex justify-center align-middle backdrop-filter backdrop-blur-md bg-opacity-10`}
    >
      <nav className="flex justify-between max-w-5xl w-full px-10 items-center">
        <div>
          <a href="/" className={`${theme == "light"? "text-lightmode-maintext" : "text-darkmode-maintext" }`}>Jpds.dev</a>
        </div>
        {
          title == "" ? "" : <title> + title + </title>
        }
        <div className="flex gap-3">
          <NavIcon />
        </div>
      </nav>
    </header>
  );
}
