import { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/70 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Sachin Kumar
        </a>

        {/* Desktop Nav */}
        <div className="space-x-8 hidden md:flex items-center text-sm font-medium">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=10rZyRaLp6ywpkzEzN73NYMdSH4PAI04e"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 
                       transition-all duration-300 
                       flex items-center gap-2"
          >
            <FaDownload size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-6 space-y-6 text-gray-300 text-sm font-medium">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Contact
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=10rZyRaLp6ywpkzEzN73NYMdSH4PAI04e"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-5 py-2 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       hover:shadow-lg hover:shadow-indigo-500/30 
                       transition-all duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
