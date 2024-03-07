import { CircleNotch } from "@phosphor-icons/react";

export default function LoadingComponent() {
  return (
    <div className="flex flex-col px-auto py-44 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <div className="flex animate-spin">
          <CircleNotch size={96} weight="light" color="#E8E8FD" />
        </div>
        <span className="text-2xl font-bold text-darkmode-maintext block w-46 text-center">
          Carregando Posts...
        </span>
      </div>
    </div>
  );
}
