import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMysql,
  SiMongodb,
  SiGit,
  SiJenkins,
  SiAmazons3,
  SiGrafana,
  SiReact,
} from 'react-icons/si'
type Skill = {
  name: string
  icon?: IconType
  color?: string
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillCategories:SkillCategory[]  = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Golang', icon: SiGo, color: '#00ADD8' },
    ],
  },
  {
    title: 'Frameworks & Web',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Fastify', icon: SiFastify, color: '#000000' },
      { name: 'Gin', icon: SiGo, color: '#00ADD8' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'REST APIs', icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'AWS S3', icon: SiAmazons3, color: '#569A31' },
      { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'OOP' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white scroll-mt-15">
      <div className="max-w-6xl mx-auto px-6 scroll-mt-28">
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

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
  const Icon = skill.icon

  return (
    <span
      key={skill.name}
      className="flex items-center gap-2 text-sm bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition duration-300"
    >
      {Icon && skill.color && (
        <Icon size={18} color={skill.color} />
      )}
      {skill.name}
    </span>
  )
})}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills