import React from 'react';

const PDF_FILE_URL = "http://localhost:5176/Resume-original-7.pdf";

export default function Resume() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl mb-6">Resume</h1>
      <p className="my-4 text-lg text-gray-500">“What we think, we become.” – Buddha</p>
      
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2007-2019</h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Srinivasa Vidhyalaya Matric Higher Secondary School-Udumalpet</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">SSLC - 91%</p>
        </a>
        
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2019-2022</h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nachimuthu Polytechnic College - Pollachi</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">Diploma in Electrical and Electronics Engineering - 95.67%</p>
        </a>
        
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2022-2025</h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sri Krishna College Of Engineering and Technology-Coimbatore</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">Bachelor's in Computer Science Engineering - CGPA = 7.95</p>
        </a>
      </div>
      <br/>
      <button onClick={() => downloadFileAtURL(PDF_FILE_URL)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
}
