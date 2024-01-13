import { useAnimation } from "framer-motion";
import { useState } from "react"

interface TechIconsProps {
	tech: {
		name: String
	}
}

export default function TechIcons({tech}:TechIconsProps) {
	const [hover, setHover] = useState(false);
	const controls = useAnimation();
	const iconUrl = "https://skillicons.dev/icons?i="+tech.name+"&theme=light";
	
	return (
		<>
			<div className="h-max items-center relative w-max" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<div className={`bg-darkbase rounded-md absolute duration-200 left-1/2 -translate-x-1/2 transition-opacity p-3 visible ease-in ${hover ? "translate-y-[-110%] opacity-100 visible" : "invisible opacity-0"}`}>
					<span className={`${(tech.name == "aws" || tech.name == "gcp") ? "uppercase" : "capitalize"}`}>{tech.name}</span>
					<div className={`h-0 w-0 border-x-8 border-x-transparent duration-200 border-t-[16px] border-t-darkbase absolute transition-opacity left-1/2 -translate-x-1/2 visible ease-in ${hover ? "translate-y-[30%] opacity-100 visible" : "invisible opacity-0"}`}/>
				</div>
				<div className="flex">
					<img className="w-12 h-12 object-contain" src={iconUrl} />
				</div>
			</div>
		</>
	);
}
