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
	const iconUrl = "https://skillicons.dev/icons?i="+tech.name;
	


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

// const getRandomTransformOrigin = () => {
// 	const value = (16 + 40 * Math.random()) / 100;
// 	const value2 = (15 + 36 * Math.random()) / 100;
// 	return {
// 	  originX: value,
// 	  originY: value2
// 	};
//   };
  
//   const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);
  
//   const randomDuration = () => Math.random() * 0.07 + 0.23;
  
//   const variants = {
// 	start: (i:number) => ({
// 	  rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
// 	  transition: {
// 		delay: getRandomDelay(),
// 		repeat: Infinity,
// 		duration: randomDuration()
// 	  }
// 	}),
// 	reset: {
// 	  rotate: 0
// 	}
//   };
  
//   export default function App() {
	
  
// 	return (
// 	  <div>
// 		<motion.h2
// 		  initial={{
// 			y: -20
// 		  }}
// 		  animate={{
// 			x: 50,
// 			y: 10,
// 			scale: 1.2
// 		  }}
// 		>
// 		  AnimationElements
// 		</motion.h2>
// 		<button
// 		  type="button"
// 		  onClick={() => {
// 			controls.start("start");
// 		  }}
// 		>
// 		  start shaking
// 		</button>
// 		<span> </span>
// 		<button
// 		  type="button"
// 		  onClick={() => {
// 			controls.stop();
// 			controls.set("reset");
// 		  }}
// 		>
// 		  stop shaking
// 		</button>
// 		<br />
// 		<br />
// 		<div className="nine-wrap">
// 		  {assets.rockStars.slice(0, 9).map((item, i) => (
// 			<motion.div
// 			  className="nine-card"
// 			  key={`${item.profile}`}
// 			  // style={{
// 			  //   transformOrigin: getRandomTransformOrigin(),
// 			  // }}
// 			  style={{
// 				...getRandomTransformOrigin(),
// 				backgroundImage: `url(${item.profile})`
// 			  }}
// 			  // -- controls --
// 			  custom={i}
// 			  variants={variants}
// 			  animate={controls}
// 			/>
// 		  ))}
// 		</div>
// 	  </div>
// 	);
//   }
  