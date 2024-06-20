import React from 'react'
import AshImg from '../assets/IMG_2118.jpg';
import deve from '../assets/15951.gif';

export default function About() {
  return (
    <div>
    {/* <div className="flex justify-end items-center w-full h-screen bg-gray-900"> */}
    <h1 className="flex justify-center font-bold text-4xl"> ABOUT</h1><br/>
    <p class="my-4 text-lg text-gray-500">“In the middle of difficulty lies opportunity.” – Albert Einstein</p>
      <div class=" bg-gray-800 md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
    
    <img src={deve}></img>   
  {/* <div class="h-[140px] bg-gradient-to-r from-gray-800 to-gray-800"></div> */}
  <div class="px-5 py-2 flex flex-col gap-3 pb-6">
    <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"><img src={AshImg} class="w-full h-full rounded-full object-center object-cover"/></div>
    <div class="">
      <h3 class="text-xl text-white relative font-bold leading-6">Aswin S</h3>
      <p class="text-sm text-gray-600">Sri Krishna College of Engineering and Technology</p>
    </div>
    <div class="flex gap-3 flex-wrap"><span class="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Developer</span><span class="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Design</span><span class="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Managements</span><span class="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Projects</span></div>
    {/* <div class="flex gap-2"><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Send Message</button><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">projects</button></div> */}
    <h4 class="text-md font-medium leading-3">About Me</h4>
    <p class="text-sm text-stone-500">I am a passionate software developer with a knack for designing and implementing efficient solutions. Currently pursuing my degree at Sri Krishna College of Engineering and Technology, I have honed my skills in Java, SQL, and React JS. My experience spans across developing user-centric applications and managing projects effectively. I am constantly learning and adapting to new technologies, striving to improve my craft. In my free time, I enjoy exploring new programming languages and contributing to open-source projects.</p>
    <h4 class="text-md font-medium leading-3">Personal Details</h4>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg> */}
        <div class="leading-3">
          <p class=" text-sm font-bold text-slate-700">Date Of Birth</p><span class="text-xs text-slate-600"></span>
        </div>
        <p class="text-sm text-slate-500 self-start ml-auto">15 June 2004</p>
      </div>
      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg> */}
        <div class="leading-3">
          <p class=" text-sm font-bold text-slate-700">Address</p><span class="text-xs text-slate-600"></span>
        </div>
        <p class="text-sm text-slate-500 self-start ml-auto">98,Sri Balaji Nagar,Udumalpet</p>
      </div>
      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg> */}
        <div class="leading-3">
          <p class=" text-sm font-bold text-slate-700">Pincode</p><span class="text-xs text-slate-600"></span>
        </div>
        <p class="text-sm text-slate-500 self-start ml-auto">642126</p>
      </div>
      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg> */}
        <div class="leading-3">
          <p class=" text-sm font-bold text-slate-700">Email</p><span class="text-xs text-slate-600"></span>
        </div>
        <p class="text-sm text-slate-500 self-start ml-auto">aswinsee796@gmail.com</p>
      </div>
      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg> */}
        <div class="leading-3">
          <p class=" text-sm font-bold text-slate-700">Phone</p><span class="text-xs text-slate-600"></span>
        </div>
        <p class="text-sm text-slate-500 self-start ml-auto">(+91)7010866027</p>
      </div>
    </div>
    </div>
  </div>
</div>

  
  )
}
