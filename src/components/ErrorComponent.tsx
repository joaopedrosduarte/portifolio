interface ErrorComponentProps {
  theme: string;
}

export default function ErrorComponent({ theme }: ErrorComponentProps) {
  return (
    <div className="flex flex-col px-auto py-[232px] px-10 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <span className={`${ theme == "light"? "text-zinc-700" : "text-darkmode-maintext" }  text-2xl font-bold block w-46 text-center`}>
          Os Projetos estão sendo finalizados e em breve estarão disponíveis! 😁
        </span>
      </div>
    </div>
  );
}
