import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] pt-28 bg-gray-950 text-white flex flex-col justify-center items-center text-center px-6"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sachin Kumar
        </span>
      </motion.h1>

      {/* Branding Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-indigo-400 text-lg md:text-xl font-medium mb-6"
      >
        SDE | Backend Engineer | NIT Agartala
      </motion.p>

      {/* Short Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Backend-focused Software Engineer building scalable APIs and production-ready systems using Node.js, TypeScript, and Go.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-300"
      >
        View Projects
      </motion.a>
    </section>
  )
}

export default Hero