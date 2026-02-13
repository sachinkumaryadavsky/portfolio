import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10 text-gray-300 text-lg md:text-xl 
                     leading-relaxed text-center"
        >
          <p>
            Backend-focused{' '}
            <span className="text-indigo-400 font-semibold">
              Software Engineer
            </span>{' '}
            and B.Tech CSE graduate from{' '}
            <span className="text-indigo-400 font-semibold">
              NIT Agartala (CGPA: 8.83)
            </span>
            , specializing in{' '}
            <span className="text-indigo-400 font-semibold">
              scalable backend systems{' '}
            </span>
            grounded in strong computer science fundamentals.
          </p>

          <p>
            I design clean, modular architectures, optimize databases, and build{' '}
            <span className="text-indigo-400 font-semibold">
              resilient backend infrastructure
            </span>{' '}
            that powers real-world products at scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
