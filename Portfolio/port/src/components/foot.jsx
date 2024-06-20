import React from 'react';

const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Aswin S. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/aswinsee796" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49.5.092.682-.217.682-.484 0-.238-.008-.868-.013-1.703-2.782.604-3.37-1.34-3.37-1.34-.455-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.891 1.528 2.34 1.086 2.91.83.09-.647.35-1.086.635-1.336-2.22-.252-4.555-1.113-4.555-4.95 0-1.093.39-1.988 1.03-2.688-.103-.252-.448-1.266.097-2.64 0 0 .84-.27 2.75 1.027A9.563 9.563 0 0112 6.845c.85.003 1.705.115 2.505.337 1.91-1.297 2.75-1.027 2.75-1.027.545 1.374.2 2.388.098 2.64.64.7 1.03 1.595 1.03 2.688 0 3.847-2.337 4.694-4.565 4.944.36.31.68.922.68 1.86 0 1.344-.012 2.426-.012 2.756 0 .27.18.58.688.48C19.13 20.167 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aswin-s-14ab75254/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.11-.89-2-2-2s-2 .89-2 2v5.5h-3v-10h3v1.47c.84-.87 2.04-1.47 3.5-1.47 2.49 0 4.5 2.01 4.5 4.5v5.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
