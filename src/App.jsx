import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import About2 from './components/About2'
import Project from './components/Project'
import Skill from './components/Skill'
import Skills_2 from './components/Skills_2'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <About2/>
      
      <Skill/>
      <Skills_2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
