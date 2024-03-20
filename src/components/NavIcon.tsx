import useTheme from "../hooks/useTheme";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export default function NavButton() {
  const { theme, toggleTheme } = useTheme();
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    theme == "light" ? setIsDarkmode(false) : setIsDarkmode(true);
  }, [theme])

  return (
    <button
      onClick={() => toggleTheme()}
      className={`${
        theme == "light"
          ? "bg-lightmode-darkbase border-lightmode-darkbase text-lightmode-auxiliartext hover:border-blue-500 hover:shadow-blue-300"
          : "bg-darkmode-lightbase border-darkmode-darkbase hover:border-blue-600 hover:shadow-blue-600"
      } bg-opacity-80 border-opacity-5 flex p-[6px] rounded-lg hover:shadow-shinny text-lightgray hover:text-blue-500 transition-all border-2 duration-200`}
    >
      <Expand placeholder={undefined} toggled={isDarkmode} />
    </button>
  );
}
