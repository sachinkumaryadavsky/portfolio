import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiArrowUp } from "react-icons/hi"

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Branding */}
          <h3 className="text-lg font-semibold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sachin Kumar
          </h3>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-lg">
            <a
              href="https://github.com/sachinkumaryadavsky"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sachin-kumar-8b8441226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>

            {/* Scroll to top */}
            <a
              href="#home"
              className="hover:text-pink-400 transition"
            >
              <HiArrowUp />
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} · Built with ❤️ by Sachin Kumar
        </div>

      </div>
    </footer>
  )
}

export default Footer