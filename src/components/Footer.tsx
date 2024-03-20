import useTheme from "../hooks/useTheme";

export default function Footer() {
    const { theme } = useTheme();
    return(
        <div className={`${theme == "light"? "border-lightmode-darkbase" : "border-darkmode-darkbase" } flex justify-center border-t-2`}>
            <div className="w-full flex p-10 max-w-5xl px-10 py-16 justify-center mb4:text-left text-center">
                <h1 className={`${theme == "light"? "text-lightmode-maintext" : "text-darkmode-maintext" } font-semibold`}>
                    Copyright © 2023. All rights are reserved
                </h1>
            </div>
        </div>
    )
}