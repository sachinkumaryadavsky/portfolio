import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-950 text-white pt-24 md:pt-28 "
    >
      {/* LEFT SIDE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.18),transparent_45%)]"></div>

      {/* RIGHT SIDE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(139,92,246,0.12),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grd-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-center md:text-left">
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight"
          >
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sachin Kumar
            </span>
          </motion.h1>

          <p className="text-indigo-400 text-lg md:text-xl font-medium tracking-wide">
            Software Engineer · NIT Agartala
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Solving complex problems through reliable, scalable backend
            engineering.
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['Node.js', 'C++', 'TypeScript', 'Go', 'MySQL', 'DSA'].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-900/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-indigo-400 border border-gray-700 hover:border-indigo-500 transition"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Button */}
          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative transition-transform duration-500 ease-out hover:-translate-y-3">
            {/* Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Sachin Kumar"
              className="relative w-80 h-80 object-cover rounded-3xl border border-gray-700 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
