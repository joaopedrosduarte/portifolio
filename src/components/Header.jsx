import { useState } from 'react';
import { X, List } from 'phosphor-react';

export default function Header() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" }
    ]
    const [open, setOpen] = useState(false);

    return (
        <header className='bg-[#27272c] shadow-lg py-6 px-10'>
            <nav className="flex justify-between">
                <h1>
                    <a href="/">Jpds.dev</a>
                </h1>
                <ul className={`float-right transition-all duration-300 md:flex md:flex-row flex-col flex justify-center align-middle md:gap-6 md:static md:h-auto md:w-auto absolute h-screen w-full bg-[#27272c] left-0 top-0 ${open ? "" : "left-[-100%]"}`}>
                    {links.map((link) => (
                        <a className='flex flex-1 justify-center items-center h-max duration-300 hover:bg-zinc-700' href={link.link}>{link.name}</a>
                    ))}
                    <div onClick={() => setOpen(!open)} className='w-9 md:absolute md:hidden absolute right-8 top-6 cursor-pointer'>
                        <X size={32} color="rgb(255, 255, 255)" weight="bold" />
                    </div>
                </ul>
                <div onClick={() => setOpen(!open)} className={`static md:hidden cursor-pointer`}>
                    <List size={32} color="rgb(255, 255, 255)" weight="bold" />
                </div>
            </nav>
        </header >
    )
}