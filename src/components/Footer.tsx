
interface FooterProps {
    className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
    return(
        <div className={`${className} flex justify-center border-t-2 border-darkbase`}>
            <div className="w-full flex p-10 max-w-5xl px-10 py-16 justify-center mb4:text-left text-center">
                <h1 className="font-semibold text-darkmode-maintext">
                    Copyright © 2023. All rights are reserved
                </h1>
            </div>
        </div>
    )
}