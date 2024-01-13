import { useState } from 'react';
import { X, List } from 'phosphor-react';

export default function Header() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Contact", link: "/" }
    ]
    const [open, setOpen] = useState(false);

    return (
        <header className='bg-lightbase shadow-lg w-full py-6 px-10 fixed z-50'>
            <nav className="flex justify-between">
                <h1>
                    <a href="/">Jpds.dev</a>
                </h1>
                <ul className={`float-right transition-all duration-300 rg:flex rg:flex-row flex-col flex justify-center align-middle rg:gap-6 rg:static rg:h-auto rg:w-auto absolute h-screen w-full left-0 top-0 ${open ? "" : "left-[-100%]"}`}>
                {links.map((link) => (  
                    <a className='rg:bg-lightbase text-lg bg-lightbase flex flex-1 justify-center items-center h-max duration-300 rg:hover:text-green-500 ' href={link.link} key={link.name}>{link.name}</a>
                ))}
                <div onClick={() => setOpen(!open)} className='w-9 rg:absolute rg:hidden absolute right-8 top-6 cursor-pointer'>
                    <X size={28} color="#fff" weight="bold" />
                </div>
                </ul>
                <div onClick={() => setOpen(!open)} className={`static rg:hidden cursor-pointer`}>
                    <List size={32} color="#fff" />
                </div>
            </nav>
        </header >
    )
}