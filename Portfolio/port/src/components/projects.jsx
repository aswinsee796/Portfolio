import React from 'react'

function Projects() {
  return (
    <div>
              <h1 className="flex justify-center font-bold text-4xl mb-6">PROJECTS</h1>
              <p class="my-4 text-lg text-gray-500">“If life were predictable it would cease to be life, and be without flavour.” – Eleanor Roosevelt</p>
      <div class="flex flex-wrap justify-center mt-10">

{/* <!-- card 1 --> */}
<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-white-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Online Tutoring Application-Fullstack</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Tech stacks: Reactjs, Spring Boot, java, MySQL.<br/>
The Application connects students with tutors In which it contains
the courses and the student need to purchase the available
courses to learn. It provides a virtual environment where students
can access educational resources, interact with tutors.
            </p>
            <a href="https://github.com/aswinsee796/Online-tutoring-platform" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

{/* <!-- card 2 --> */}
<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-white-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Online Quiz Application-Console</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Tech stacks : java,SQL<br/>
                There are some Questions which are stored in the database once the user login with 
                his/her own credentials . some random questions are thrown with multiple choices 
                and the user need to enter the prefered choice as answer. Once the session was completed
                the percentage,no of questions were answered wrong and the overall verdict will be displayed.
                This will be stored in database too.
            </p>
            <a href="https://github.com/aswinsee796/mini-project" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

{/* <!-- card 3 --> */}
<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-white-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Chess Academy Admission-fullstack</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Tech stacks: Vite+Reactjs, Springboot, java, PostgreSQL<br/>
The Administrator create the course and manage the student
progress and generate reports to monitor the academy’s
performance. Whereas the student purchase the course and start
learning. Instructors can create lesson plans and communicate
with students and parents.
            </p>
            <a href="https://github.com/aswinsee796/Advanced-app-development" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

</div>

    </div>
  )
}

export default Projects
