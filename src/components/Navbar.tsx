import { FaDownload } from "react-icons/fa"

const Navbar = () => {
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

        {/* Nav Links */}
        <div className="space-x-8 hidden md:flex items-center text-sm font-medium">

          <a
            href="#about"
            className="relative hover:text-white transition 
                       after:absolute after:-bottom-1 after:left-0 
                       after:h-[2px] after:w-0 
                       after:bg-indigo-500 
                       after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            About
          </a>
            <a href="#experience" className="relative hover:text-white transition 
                       after:absolute after:-bottom-1 after:left-0 
                       after:h-[2px] after:w-0 
                       after:bg-indigo-500 
                       after:transition-all after:duration-300 
                       hover:after:w-full">Experience</a>
          <a
            href="#projects"
            className="relative hover:text-white transition 
                       after:absolute after:-bottom-1 after:left-0 
                       after:h-[2px] after:w-0 
                       after:bg-indigo-500 
                       after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="relative hover:text-white transition 
                       after:absolute after:-bottom-1 after:left-0 
                       after:h-[2px] after:w-0 
                       after:bg-indigo-500 
                       after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Contact
          </a>

          {/* Resume Button */}
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

      </div>
    </nav>
  )
}

export default Navbar