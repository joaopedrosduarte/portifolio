interface EmptyComponentProps {
  theme: string;
}

export default function EmptyComponent({ theme }: EmptyComponentProps) {
  return (
    <div className="flex flex-col px-auto py-[120px] px-10 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <span className={`${ theme == "light"? "text-zinc-700" : "text-darkmode-maintext" }  text-2xl font-bold block w-46 text-center`}>
          Os projetos estão recebendo os seus toques finais e em breve estarão disponíveis! 😁
        </span>
      </div>
    </div>
  );
}
