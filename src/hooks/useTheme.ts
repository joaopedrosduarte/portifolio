import { useContext } from "react";
import { ThemeContextType } from "../types/ThemeContext";
import { ThemeContext } from "../context/themeContext";

export default function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    return context
}