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
          className="text-4xl font-bold text-center mb-16 text-indigo-500"
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
          <ul className="space-y-3 text-gray-400 list-disc list-inside">
            <li>
              Built and deployed scalable REST APIs using Node.js, TypeScript,
              Fastify, and Go (Gin).
            </li>

            <li>
              Designed and implemented the Credit Health Report system,
              including PDF generation, AWS S3 storage, and secure download flow.
            </li>

            <li>
              Integrated third-party APIs with proper error handling to ensure
              reliable backend communication.
            </li>

            <li>
              Optimized MySQL queries and improved schema design,
              improving API response time and performance.
            </li>

            <li>
              Contributed to backend architecture and owned end-to-end
              feature delivery in production systems.
            </li>
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