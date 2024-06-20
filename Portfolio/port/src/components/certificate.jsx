import React from 'react';
import awsImg from '../assets/v2.png';
import cyberImg from '../assets/cisco2.jpeg';
import nptImg from '../assets/nptel2.jpeg';

const PDF1_FILE_URL = "http://localhost:5176/Aws-cloud foundations.pdf";
const PDF2_FILE_URL = "http://localhost:5176/AswinS-Cyber Surakshit .pdf";
const PDF3_FILE_URL = "http://localhost:5176/nptel-design thinking.pdf";
export default function Certificate() {
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
    <div className="flex flex-col justify-center items-center bg-gray-800 min-h-screen">
         <h1 className="flex justify-center font-bold text-4xl mb-6">CERTIFICATIONS</h1>
              <p class="my-4 text-lg text-gray-500">“The big lesson in life, baby, is never be scared of anyone or anything.” – Frank Sinatra</p>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
          <img src={awsImg} alt="Mountain" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">AWS Academy-Cloud Foundations</h2>
            <p className="text-gray-700 leading-tight mb-4">
            The AWS Academy Cloud Foundations course provides a comprehensive introduction to cloud computing concepts, AWS core services, security, architecture, pricing, and support. This course is designed for students seeking foundational knowledge and skills in cloud computing, preparing them for roles in the cloud industry. It includes hands-on labs and real-world scenarios to enhance learning and practical experience.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
             
              <button onClick={() => downloadFileAtURL(PDF1_FILE_URL)}  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>

              </div>
              <span className="text-gray-600">20 hours</span> 
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
          <img src={cyberImg} alt="Mountain" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">CISCO-Introduction to CyberSecurity</h2>
            <p className="text-gray-700 leading-tight mb-4">
             
The Cisco Introduction to Cybersecurity course offers a thorough understanding of the essential principles and practices of cybersecurity. It covers topics such as the significance of cybersecurity, the types of threats and attacks, and how to protect networks and data. The course includes practical exercises and real-world examples to reinforce learning.Participants will gain knowledge about cybersecurity tools and techniques.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              <button onClick={() => downloadFileAtURL(PDF2_FILE_URL)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
              </div>
              <span className="text-gray-600">15 hours</span> 
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
          <img src={nptImg} alt="Mountain" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">NPTEL-Desing Thinking</h2><br/>
            <p className="text-gray-700 leading-tight mb-4">
            The NPTEL Design Thinking course offers a structured approach to innovation, focusing on user-centric problem-solving and creative thinking. It covers the fundamental principles of design thinking, including empathizing with users, defining problems, ideating, prototyping, and testing. The course combines theoretical knowledge with practical applications, featuring case studies and assignments to reinforce learning. 
            </p>
            <div className="flex justify-between items-center">
               <div className="flex items-center">
               <button  onClick={() => downloadFileAtURL(PDF3_FILE_URL)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
              </div> 
               <span className="text-gray-600">4 weeks</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
