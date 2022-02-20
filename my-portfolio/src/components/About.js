import React from "react";


export default function About(){
    return (
        <section id="about" className="text-gray-400 bg-gray-700 body-font"> 
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                H! I'm Ryan.
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                I recently graduated with a B.S. in Computer Engineering from the University of California, Santa Barbara. I am a problem-solving individual who is always trying to find efficient solutions through the use of different technologies. I'd like to say that I am a social empath who is highly observant and picks up on things quickly. I want this website to serve as a record of what I've accomplished as a blooming engineer as well as a window into who I am as a person. 
              </p>
              <div className="flex justify-center">
                <a
                href="#about_me"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                About Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}