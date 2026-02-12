import { FaDownload } from "react-icons/fa"
const Navbar = () => {
  return (
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-indigo-500">
          Sachin.dev
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          <a
  href="https://drive.google.com/uc?export=download&id=10rZyRaLp6ywpkzEzN73NYMdSH4PAI04e"
  target="_blank"
  className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
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