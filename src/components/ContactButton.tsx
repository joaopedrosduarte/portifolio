interface ContactButton {
  component: React.ReactElement;
  title: string;
  theme: string;
  content: string;
  href?: string;
  link?: string;
}

export default function ContactButton({
  component,
  title,
  theme,
  content,
  href = "",
}: ContactButton) {
  return (
    <div className="flex mb4:flex-row flex-col items-center mb4:text-left text-center gap-2">
      <div className={`${theme == "light"? "shadow-black/20" : "shadow-black/40 bg-darkmode-lightbase"} w-14 h-14 transition-shadow duration-300 shadow-baseblured rounded-full items-center flex justify-center`}>
        {component}
      </div>
      <div className="flex flex-col text-base align-middle justify-evenly">
        <h1 className={`${ theme == "light"? "text-lightmode-auxiliartext" : "text-darkmode-maintext "} font-semibold`}>{title}</h1>
        {href == "" ? (
          <span className={`${ theme == "light"? "text-zinc-500 hover:text-blue-500 decoration-blue-500" : "text-darkmode-auxiliartext hover:text-blue-400 decoration-blue-400" } transition-colors decoration-solid`}>
            {content}
          </span>
        ) : (
          <a
            className={`${ theme == "light"? "text-zinc-500 hover:text-blue-500 decoration-blue-500" : "text-darkmode-auxiliartext hover:text-blue-400 decoration-blue-400" } transition-colors decoration-solid`}
            href={href}
          >
            {content}
          </a>
        )}
      </div>
    </div>
  );
}
