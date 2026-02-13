import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "TypeScript", "Golang"],
  },
  {
    title: "Frameworks & Web",
    skills: ["Node.js", "Express.js", "Fastify", "Gin", "React.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Jenkins", "AWS S3", "Grafana"],
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
         Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-gray-800 px-3 py-1 rounded-full hover:bg-indigo-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills