import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Glass Card Container */}
        <div className="relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-3xl p-10 md:p-14 shadow-xl">

          {/* Accent Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l-3xl" />

          <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed pl-6">

            <p>
              I am a <span className="text-indigo-400 font-semibold"> Software Engineer </span> 
              and B.Tech CSE graduate from 
              <span className="text-indigo-400 font-semibold"> NIT Agartala (CGPA: 8.83)</span>, 
              focused on building scalable and high-performance backend systems.
            </p>

            <p>
              I enjoy designing clean system architectures, optimizing database 
              performance, and solving real-world engineering problems with 
              <span className="text-indigo-400 font-semibold"> reliability and efficiency</span> in mind.
            </p>

            <p>
              With strong fundamentals in 
              <span className="text-indigo-400 font-semibold"> Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks</span>, 
              I approach backend development with both practical experience 
              and solid computer science foundations.
            </p>

            <p>
              I engineer <span className="text-indigo-400 font-semibold">scalable, high-performance backend systems </span>focused on reliability, efficiency, and real-world production impact.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About