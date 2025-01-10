"use client";

import { useState } from "react";
import { getIcon } from "../Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuIcon = getIcon("bars");
    const isHome = usePathname() === "/";
    const currentUrl = usePathname();

    return (
        <nav className={`${isHome ? 'md:hidden' : ''} sticky bg-transparent md:bg-slate-900 md:shadow w-full z-20 top-0`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className={`${isHome ? 'hidden' : ''} flex items-center space-x-3 rtl:space-x-reverse`}>
                    <h1 className="md:inline-block self-center whitespace-nowrap font-black text-4xl text-white">Joseph Gonzalez</h1>
                </Link>
                <div className="flex ">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        { menuIcon && <FontAwesomeIcon icon={menuIcon} className="text-xl"/> }
                    </button>
                </div>
                <div className={`${ isMenuOpen ? 'block transition duration-300 ease-in-out' : 'hidden' } absolute top-12 left-0 w-full px-4 md:px-0 md:block md:relative md:top-auto md:left-auto md:w-auto`}>
                    <ul className="flex flex-col md:items-center p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-800 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                href="/" 
                                className={`${currentUrl === '/' ? 'text-green-500 font-bold' : 'text-white'} block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-green-highlight md:transition duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)}>    
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className={`${currentUrl === '/about' ? 'text-green-500 font-bold' : 'text-white'} block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-green-highlight md:transition duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)}>
                                Perfil
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/education" 
                                className={`${currentUrl === '/education' ? 'text-green-500 font-bold' : 'text-white'} block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-green-highlight md:transition duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)}>
                                Educación
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/experience" 
                                className={`${currentUrl === '/experience' ? 'text-green-500 font-bold' : 'text-white'} block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-green-highlight md:transition duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)}>
                                Experiencia
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={`${currentUrl === '/projects' ? 'text-green-500 font-bold' : 'text-white'} block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-green-highlight md:transition duration-300 ease-in-out`}
                                onClick={() => setIsMenuOpen(false)}>
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <button className="md:block hidden py-2 px-4 rounded-md bg-green-selected hover:bg-green-500 transition duration-300 ease-in-out">
                                Descargar CV
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};