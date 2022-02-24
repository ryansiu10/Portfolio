import {UserIcon} from  "@heroicons/react/solid";

import React from "react";

export default function Intro(){
    return (
        <section id="intro" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <UserIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                About Me
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              </p>
            <div>
            I recently graduated with a B.S. in Computer Engineering from the University of California, Santa Barbara. Initially, I started colllege as an Electrical Engineering Major, but as I continued taking more classes I began to realize that working on the purely hardware side of things wasn't for me. After taking my first coding class I was intrigued by the thought of being able to create whatever I could imagine with the touch of my fingertips. As a result, I decided to switch into Computer Engineering so I could get a better taste of programming while still applying the hardware skills I had learned and that's where my journey began. Currently, with my skill-set I'd like to become a full stack engineer, but I am open to any and all oppurtunities to learn new things. As a person, I would say that I am a social empath who is highly observant and picks up on things quickly. Some of my hobbies are building keyboards, playing videogames with friends, and going on walks. Overall, I want this website to serve as a record of what I've accomplished as a blooming engineer as well as a window into who I am as a person. 
            </div>
            </div>
            </div>
        </section>
    );
}