import { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'coding', label: 'Coding' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-lg border-b border-gray-800">
      <div className="w-full flex items-center py-4 pl-3 pr-10">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Sachin Kumar
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-gray-400 hover:text-white transition duration-300 group"
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] 
                           bg-gradient-to-r from-indigo-500 to-purple-500 
                           transition-all duration-300 
                           group-hover:w-full"
              ></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=10rZyRaLp6ywpkzEzN73NYMdSH4PAI04e"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Sachin Kumar resume"
            className="ml-4 px-5 py-2 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 
                       transition-all duration-300 
                       flex items-center gap-2 text-white whitespace-nowrap"
          >
            <FaDownload size={14} />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-6 space-y-6 text-gray-300 text-sm font-medium"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-white transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://drive.google.com/uc?export=download&id=10rZyRaLp6ywpkzEzN73NYMdSH4PAI04e"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Sachin Kumar resume"
            className="block text-center mt-4 px-5 py-2 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar