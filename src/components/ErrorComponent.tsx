interface ErrorComponentProps {
  error: unknown;
}

export default function ErrorComponent({ error }: ErrorComponentProps) {
  console.log(error)
  return (
    <div className="flex flex-col px-auto py-[232px] px-10 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <span className="text-2xl font-bold text-darkmode-maintext block w-46 text-center">
          Os Projetos estão sendo finalizados e em breve estarão disponíveis! 😁
        </span>
      </div>
    </div>
  );
}
