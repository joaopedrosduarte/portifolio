
type propsType = {
    size: number
    color: string
    weight: string
}

interface ContactButton {
    component: React.ReactElement
    title: string
    result: string
    link?: string
}

export default function ContactButton({ component, title, result, link="" }:ContactButton) {
    return(
        <div className="flex mb4:flex-row flex-col items-center mb4:text-left text-center gap-2">
            <div className="w-14 h-14 bg-darkbase transition-shadow duration-300 shadow-baseblured hover:shadow-[0px_2px_40px_-4px] hover:shadow-blue-600 rounded-full items-center flex justify-center">
                {component}
            </div>
            <div className="flex flex-col text-base align-middle justify-evenly">
                <h1 className="text-darkmode-maintext font-semibold">
                    {title}
                </h1>
                <a className="text-darkmode-auxiliartext hover:text-blue-400 decoration-1 decoration-solid decoration-blue-400" href="">
                    {result}
                </a>
            </div>
        </div>
    )
}