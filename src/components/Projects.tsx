import { motion } from "framer-motion"

const projects = [
  {
    title: "PulsePeek – AI Health Companion",
    description:
      "AI-powered health companion with multimodal image analysis, symptom tracking, and personalized guidance. Integrated OpenAI/Google Gemini and OpenWeather APIs.",
    tech: ["React", "TypeScript", "Tailwind", "Next.js", "Google Gemini API", "OpenWeather API"],
    github: "https://github.com/sachinkumaryadavsky/pulse-peek",
    demo: "https://pulse-peek.vercel.app/",
  },
  {
    title: "Placement Portal (MERN)",
    description:
      "Full-stack Placement Portal to streamline job applications, with role-based auth, branch filtering, and dashboard features for students & TNP reps.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/sachinkumaryadavsky/Placement-Portal",
    demo: "",
  },
  {
    title: "ChatterBox – Real-time Chat App",
    description:
      "Real-time chat application built with Socket.IO for low-latency messaging and persistent chats stored in MongoDB.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/sachinkumaryadavsky/Chatter-Box",
    demo: "",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-500">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-950 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-2 text-sm bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-3 py-2 text-sm bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects