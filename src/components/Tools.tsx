
interface ToolProps {
  name: string;
  theme: string;
}

export default function Tool({ name, theme }: ToolProps) {
  return (
    <div className={`${theme=="light"? "bg-lightmode-darkbase text-zinc-600" : "bg-darkmode-darkbase" } py-1 px-3 text-xs bg-lightbase rounded-full w-max`}>{name}</div>
  )
}