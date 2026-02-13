import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl leading-[1.15] pb-1 font-black mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
        >
          Projects
        </motion.h2>

        {/* ================= FEATURED PROJECT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-10 border border-gray-800 
                     hover:border-indigo-500 
                     hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] 
                     transition mb-20"
        >
          <h3 className="text-3xl font-semibold mb-6">
            PulsePeek – AI Health Companion
          </h3>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Developed an AI-powered health companion enabling multimodal image
            analysis and symptom tracking with non-diagnostic guidance.
            Integrated Google Gemini multimodal APIs with strict JSON schema
            validation and real-time environmental data via OpenWeather APIs.
          </p>

          <ul className="space-y-4 text-gray-400 leading-relaxed mb-8">
            {[
              'Integrated Google Gemini multimodal APIs with deterministic prompting to ensure consistent and structured AI outputs.',
              'Implemented real-time environmental data integration using OpenWeather APIs to enhance contextual health insights.',
              'Designed a modular and scalable frontend architecture using React and TypeScript for maintainability.',
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

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

          <div className="flex gap-6">
            <a
              href="https://pulse-peek.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 
                         hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] 
                         transition"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/sachinkumaryadavsky"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* ================= OTHER PROJECTS ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placement Portal */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4">Placement Portal</h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              Designed and developed a full-stack web-based Placement Portal to
              streamline the campus recruitment workflow for students, TNP
              representatives, and TPOs.
            </p>

            <ul className="space-y-3 text-gray-400 leading-relaxed mb-4">
              {[
                'Implemented role-based authentication using JWT for Students and TNP administrators.',
                'Enforced secure access control with credential validation and protected routes.',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

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
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4">ChatterBox</h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              Developed a real-time messaging platform enabling instant
              communication with persistent chat history and scalable backend
              architecture.
            </p>

            <ul className="space-y-3 text-gray-400 leading-relaxed mb-4">
              {[
                'Engineered real-time bidirectional communication using Socket.IO for low-latency messaging.',
                'Designed scalable backend services with Node.js and MongoDB to support user management and persistent chat storage.',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

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
