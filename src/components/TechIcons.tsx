import { useState } from "react"
import useTheme from "../hooks/useTheme";

interface TechIconsProps {
	tech: {
		name: string
	}
}

export default function TechIcons({tech}:TechIconsProps) {
	const { theme }= useTheme();
	const iconUrl = "https://skillicons.dev/icons?i="+tech.name+"&theme="+theme;
	const [hover, setHover] = useState(false);
	
	return (
		<>
			<div className="h-max items-center relative w-max" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<div className={`bg-darkmode-bg rounded-md shadow-xl absolute duration-200 left-1/2 -translate-x-1/2 transition-opacity p-3 visible ease-in ${hover ? "translate-y-[-110%] opacity-100 visible" : "invisible opacity-0"}`}>
					<span className={`${(tech.name == "aws" || tech.name == "gcp") ? "uppercase" : "capitalize"} text-zinc-200`}>{tech.name}</span>
					<div className={`h-0 w-0 border-x-8 border-x-transparent duration-200 border-t-[16px] border-t-darkmode-bg absolute transition-opacity left-1/2 -translate-x-1/2 visible ease-in ${hover ? "translate-y-[30%] opacity-100 visible" : "invisible opacity-0"}`}/>
				</div>
				<div className="flex">
					<img className="w-12 h-12 object-contain" src={iconUrl} />
				</div>
			</div>
		</>
	);
}
