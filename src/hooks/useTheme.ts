import { useContext } from "react";
import { ThemeContextType } from "../types/ThemeContext";
import { ThemeContext } from "../context/themeContext";

export default function useShopCart(): ThemeContextType {
    const context = useContext(ThemeContext);

    return context
}