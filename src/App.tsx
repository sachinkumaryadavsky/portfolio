
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import CodingProfiles from "./components/CodingProfiles"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
function App() {


  return (
    <>
     <div className="bg-gray-950 min-h-screen text-white"></div>
      <Navbar />
      <Hero />
      <WorkExperience/>
      <Skills/>
      <About />
      <Projects/>
      <CodingProfiles/>
      <Education />
      <Contact/>
     <div/>
    </>
  )
}

export default App
