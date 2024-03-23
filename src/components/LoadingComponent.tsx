import { CircleNotch } from "@phosphor-icons/react";

interface LoadingComponentProps {
  theme: string;
}

export default function LoadingComponent({ theme }: LoadingComponentProps) {
  return (
    <div className="flex flex-col px-auto py-44 w-full items-center justify-between">
      <div className={`${ theme == "light"? "text-zinc-700" : "text-darkmode-maintext" } gap-4 w-full flex flex-col items-center justify-between`}>
        <div className={`${ theme == "light"? "text-zinc-700" : "text-darkmode-maintext" } flex animate-spin`}>
          <CircleNotch size={96} weight="light" />
        </div>
        <span className="text-2xl font-bold block w-46 text-center">
          Carregando Posts...
        </span>
      </div>
    </div>
  );
}
