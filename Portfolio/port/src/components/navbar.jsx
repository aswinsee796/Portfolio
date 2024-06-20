import React, { useState } from 'react';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Resume from './resumie';
import Certificate from './certificate';
import Contact from './contact';
import Foot from './foot';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);  // Close the mobile menu after clicking
    }
  };

  return (
    <div>
      <nav className="sm:bg-gray-800 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollToSection('skills')} className="block text-gray-300 hover:text-white">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="block text-gray-300 hover:text-white">Resume</button>
            <button onClick={() => scrollToSection('certificate')} className="block text-gray-300 hover:text-white">Certification</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden bg-gray-800">
            <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white px-4 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white px-4 py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="block text-gray-300 hover:text-white px-4 py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block text-gray-300 hover:text-white px-4 py-2">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="block text-gray-300 hover:text-white px-4 py-2">Resume</button>
            <button onClick={() => scrollToSection('certificate')} className="block text-gray-300 hover:text-white px-4 py-2">Certification</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white px-4 py-2">Contact</button>
          </div>
        )}
      </nav>
      <section id="home">
        <br/><br/><br/><br/><br/>
        <Home/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="about">
        <About/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="skills">
        <Skills/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="projects">
        <Projects/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="resume">
        <Resume/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="certificate">
        <Certificate/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <br/>
      <section>
        <Foot/>
      </section>
    </div>
  );
};

export default Navbar;
