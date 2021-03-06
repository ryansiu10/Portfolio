import { DownloadIcon} from "@heroicons/react/solid";
import {ImLinkedin} from "react-icons/im"
import {FaGithub} from "react-icons/fa"

import React from "react";
import pdf from '../pdf/Resume_Ryan_Siu.pdf'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Ryan Siu
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-5 hover:text-white text-gray-500">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white text-gray-500">
            Past Work
          </a>
        </nav>
      <div className="mx-8 flex">
          <a href={pdf} target='_blank' className="mr-auto items-center inline-flex bg-gray-800 border-0 py-1 px-3 focus:outline-none text-gray-500 hover:bg-gray-700 rounded text-base md:mt-0">
            Resume 
            <DownloadIcon className="w-4 h-4 ml-1" />
          </a>
          <a href="https://www.linkedin.com/in/ryansiu8833/" target='_blank' className =" text-gray-500 inline-flex  bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0">
            <ImLinkedin size={26}></ImLinkedin>
          </a>
          <a href="https://github.com/ryansiu10" target='_blank' className=" text-gray-500 inline-flex items-center bg-gray-800 border-0 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <FaGithub size={26}></FaGithub>
          </a>
      </div>
      </div>
     
    </header>
  );
}