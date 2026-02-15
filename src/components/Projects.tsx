import { motion } from 'framer-motion'
import pulsePeekImg from '../assets/pulsepeek.png'

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* ================= FEATURED PROJECT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 
                     hover:border-indigo-500 transition mb-20"
        >

          {/* Image Wrapper */}
          <div className="bg-gray-950 p-8 flex justify-center">
            <img
              src={pulsePeekImg}
              alt="PulsePeek – AI Health Companion Dashboard"
              className="w-full max-w-4xl h-auto object-contain rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="p-10">
            <h3 className="text-3xl font-semibold mb-6">
              PulsePeek – AI Health Companion
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Developed an AI-powered health companion enabling multimodal image
              analysis and symptom tracking with non-diagnostic guidance.
              Integrated Google Gemini multimodal APIs and real-time environmental data.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Google Gemini API',
                'OpenWeather API',
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-800 px-4 py-2 rounded-full text-indigo-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://pulse-peek.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        {/* ================= OTHER PROJECTS ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Placement Portal */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
                       hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              Placement Portal
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              Full-stack web-based Placement Portal to streamline campus
              recruitment workflow with role-based authentication and secure routing.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {['React', 'Node.js', 'Express', 'MongoDB', 'JWT'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-800 px-3 py-1 rounded-full text-indigo-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/sachinkumaryadavsky/Placement-Portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>

          {/* ChatterBox */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
                       hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              ChatterBox
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              Real-time messaging platform with persistent chat history
              using scalable backend services.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'React'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-indigo-400"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <a
              href="https://github.com/sachinkumaryadavsky/Chatter-Box"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects