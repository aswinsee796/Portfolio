import React from 'react';
import heroicImg from '../assets/dev2.webp';

function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6" />
      <section className="flex">
        <div className="w-1/2">
          <br />
          <h1 className="sm:text-4xl font-extrabold dark:text-white">Hi, I am Aswin S</h1>
          <p className="my-4 text-lg text-gray-500">
            Under graduate with a strong academic background in Computer Science Engineering. Eager to apply my skills in a dynamic professional environment.
          </p>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Skilled in developing responsive user interfaces using modern JavaScript frameworks like React.js. Proficient in Java and AWS, leveraging databases like PostgreSQL and MySQL. Strong understanding of RESTful APIs and microservices architecture.
          </p>
          <a href="https://github.com/aswinsee796" className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Learn More
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <br />
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/aswin-s-14ab75254/" target="_blank" rel="noopener noreferrer">
              <svg className="h-8 w-8 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/aswinsee796" target="_blank" rel="noopener noreferrer">
              <svg className="h-8 w-8 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.instagram.com/404aswin/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
              <svg className="h-8 w-8 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://x.com/ASHWINS45597930" target="_blank" rel="noopener noreferrer">
              <svg className="h-8 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
        <img className="w-full md:max-w-lg mx-auto mt-8 md:mt-0 rounded-lg " src={heroicImg} alt="heroic" />
      </div>

      </section>
      <div className="flex justify-center">
        <div className="flex space-6-x">
          {/* Uncomment the below buttons if you want to use them */}
          {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My works</button>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
