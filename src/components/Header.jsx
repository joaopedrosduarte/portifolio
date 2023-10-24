import { useState } from 'react';
import { List } from 'phosphor-react';


export default function Header() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" }
    ]
    const [open, setOpen] = useState(false);

    return (
        <header className='bg-[#27272c] shadow-md p-6'>
            <nav className="flex justify-between">
                <h1>
                    <a href="/">Jpds.dev</a>
                </h1>
                <ul className={`md:flex md:flex-row flex-col flex justify-center align-middle md:gap-6 md:static md:h-auto md:w-auto absolute h-screen w-full bg-[#27272c] left-0 top-0 ${open ? "" : "hidden"} `}>
                    {links.map((link) => (
                        <li className='flex flex-1 justify-center items-center h-max'><a href={link.link}>{link.name}</a></li>
                    ))}
                </ul>
                <div onClick={() => setOpen(!open)} className="w-9 absolute right-8 top-6 cursor-pointer md:hidden">
                    <span className="text-3xl text-white">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </span>
                </div>
            </nav>
        </header >
    )
}