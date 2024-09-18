interface EmptyComponentProps {
  theme: string;
}

export default function NoProjectsComponent({ theme }: EmptyComponentProps) {
  return (
    <div className="flex flex-col px-auto py-[60px] px-10 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <span className={`${ theme == "light"? "text-lightmode-auxiliartext" : "text-darkmode-auxiliartext" }  text-xl font-bold block w-46 text-center`}>
          Os projetos estão recebendo os seus toques finais e em breve estarão disponíveis! 💎
        </span>
      </div>
    </div>
  );
}
