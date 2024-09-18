interface ProjectSectionHeaderProps {
  theme: string
}

export default function ProjectSectionHeader({theme}:ProjectSectionHeaderProps) {

  return (
    <div className="flex flex-col gap-2 mb4:text-left text-center">
      <h1 className="text-blue-500 font-bold text-[26px]">Projects</h1>
      <span className={`${theme == "light"? "text-zinc-700" : "text-darkmode-maintext"} font-semibold text-xl pb-4`}>
        Cada projeto que fez parte da minha caminhada, até agora. 😉
      </span>
    </div>
  )
}