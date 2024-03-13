export default function ProjectBluredBackGround(bg: string) {
  return (
    <div className="absolute rg:max-w-[1019px] rg:h-[350px] h-[610px] max-w-[582px] w-full rg:w-full px-10 -z-10">
        <div className="blur-md bg-darkbase opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full">
          <div className={`${"bg-["+bg+"]"} rg:h-[350px] h-[350px] max-w-[582px] rg:max-w-[515px] w-full rg:px-0`}/>
        </div>
      </div>
  );
}