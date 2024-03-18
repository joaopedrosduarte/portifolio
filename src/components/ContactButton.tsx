interface ContactButton {
  component: React.ReactElement;
  title: string;
  content: string;
  href?: string;
  link?: string;
}

export default function ContactButton({
  component,
  title,
  content,
  href = "",
}: ContactButton) {
  return (
    <div className="flex mb4:flex-row flex-col items-center mb4:text-left text-center gap-2">
      <div className="w-14 h-14 bg-darkbase transition-shadow duration-300 shadow-baseblured shadow-black/30 rounded-full items-center flex justify-center">
        {component}
      </div>
      <div className="flex flex-col text-base align-middle justify-evenly">
        <h1 className="text-darkmode-maintext font-semibold">{title}</h1>
        {href == "" ? (
          <span className="text-darkmode-auxiliartext hover:text-blue-400 transition-colors decoration-solid decoration-blue-400">
            {content}
          </span>
        ) : (
          <a
            className="text-darkmode-auxiliartext hover:text-blue-400 transition-colors decoration-solid decoration-blue-400"
            href={href}
          >
            {content}
          </a>
        )}
      </div>
    </div>
  );
}
