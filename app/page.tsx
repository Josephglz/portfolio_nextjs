import Link from "next/link";
import { getIcon } from "./components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {

  const githubIcon = getIcon("github");
  const linkedinIcon = getIcon("linkedin-in");
  const xIcon = getIcon("x-twitter");

  return (
    <div className="w-full absolute h-full flex flex-col items-center justify-center md:items-start md:px-28 space-y-6 select-none">
      <div>
        <h1 className="font-extrabold md:text-5xl text-4xl text-white">Joseph Gonzalez</h1>
        <h2 className="text-slate-500 md:text-xl text-lg text-center md:text-left">Fullstack developer</h2>  
      </div>
      <div className="hidden md:flex md:flex-row md:space-x-4 text-white text-xl font-medium">
        <Link
          href={'/'}
          className="text-green-highlight font-bold transition duration-300 ease-in-out cursor-pointer">
            Inicio
        </Link>
        <Link 
          href={'/about'}
          className="hover:text-green-highlight transition duration-300 ease-in-out cursor-pointer">
            Perfil
        </Link>
        <Link
          href={'/education'}
          className="hover:text-green-highlight transition duration-300 ease-in-out cursor-pointer">
            Educación
        </Link>
        <Link
          href={'/experience'}
          className="hover:text-green-highlight transition duration-300 ease-in-out cursor-pointer">
            Experiencia
        </Link>
        <Link
          href={'/projects'}
          className="hover:text-green-highlight transition duration-300 ease-in-out cursor-pointer">
            Proyectos
        </Link>
      </div>
      <div className="flex flex-row space-x-4">
        <Link
          href='https://github.com/Josephglz'
          className="bg-gray-option p-2 rounded-full flex items-center justify-center"
          target="_blank">
          {githubIcon && <FontAwesomeIcon icon={githubIcon} className="w-4 h-4 text-white" />}
        </Link>

        <Link
          href={'https://www.linkedin.com/in/josephglz/'}
          className="bg-gray-option p-2 rounded-full flex items-center justify-center"
          target="_blank">
          {linkedinIcon && <FontAwesomeIcon icon={linkedinIcon} className="w-4 h-4 text-white" />}
        </Link>

        <Link
          href={'https://twitter.com/Josephglz99'}
          className="bg-gray-option p-2 rounded-full flex items-center justify-center"
          target="_blank">
          {xIcon && <FontAwesomeIcon icon={xIcon} className="w-4 h-4 text-white" />}
        </Link>
      </div>
    </div>
  );
}