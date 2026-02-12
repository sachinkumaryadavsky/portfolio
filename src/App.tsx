
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
import Achievements from "./components/Achievements"
function App() {


  return (
    <>
     <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience/>
      <Skills/>
      <Projects/>
      <CodingProfiles/>
      <Education />
      <Achievements/>
      <Contact/>
     </div>
    </>
  )
}

export default App
