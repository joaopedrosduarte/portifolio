
interface ToolProps {
  name: string;
}

export default function Tool({ name }: ToolProps) {
  return (
    <div className="py-1 px-3 text-xs bg-lightbase rounded-full w-max">{name}</div>
  )
}