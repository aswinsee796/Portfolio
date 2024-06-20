import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Resume from './components/resumie'
import Certificate from './components/certificate'
import Contact from './components/contact'



function App() {

  return (
  
<div>
  <Navbar/>
</div>
  )
}

export default App
