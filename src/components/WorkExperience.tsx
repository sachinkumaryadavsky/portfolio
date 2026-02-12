import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
        >

          {/* Company + Role */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">
                Software Development Engineer Intern
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-indigo-400">
                  Stashfin – Gurugram, India
                </span>

                <a
                  href="https://www.linkedin.com/company/stashfin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:scale-110 transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            <p className="text-gray-400 mt-2 md:mt-0">
              Jun 2025 – Dec 2025
            </p>
          </div>

          {/* Bullet Points */}
            <ul className="space-y-4 text-gray-400">
  {[
    "Designed and deployed scalable REST APIs powering production workflows using Node.js, TypeScript, Fastify, and Go.",
    "Implemented Credit Health Report system with PDF generation and AWS S3 secure storage.",
    "Integrated third-party APIs with robust error handling for reliable backend communication.",
    "Optimized complex MySQL queries and improved schema design to reduce response latency.",
    "Contributed to backend architecture and owned end-to-end feature delivery in production systems."
  ].map((point, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></span>
      <span>{point}</span>
    </li>
  ))}
</ul>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Node.js",
              "TypeScript",
              "Go (Gin)",
              "Fastify",
              "MySQL",
              "AWS S3",
              "REST APIs",
              "gRPC",
              "Jenkins",
              "Microservices",
              "Grafana"
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-800 px-3 py-1 rounded-full text-indigo-400"
              >
                {tech}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default WorkExperience