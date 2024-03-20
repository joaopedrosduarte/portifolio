import { createContext, useState } from 'react'
import { ThemeContextType } from '../types/ThemeContext';

export const ThemeContext = createContext({} as ThemeContextType);

export default function ThemeProvider({children}:{children: React.ReactNode}){
    const [theme, setTheme] = useState("dark");

    function toggleTheme(){
        switch (theme) {
            case "dark":
                setTheme("light");
                document.body.style.backgroundColor = "#F9FAFB";
                break;
            case "light":
                setTheme("dark");
                document.body.style.backgroundColor = "#16181D";
                break;
            default:
                break;
        }
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>

}