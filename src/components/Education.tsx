import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-gray-950 text-white scroll-mt-15"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                     mb-16 md:mb-24 text-center 
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                     bg-clip-text text-transparent tracking-tight"
        >
          Education
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] 
                          bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-pink-500/40" />

          <div className="space-y-16 sm:space-y-20">

            {/* B.Tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 sm:pl-14"
            >
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 
                              rounded-full 
                              bg-gradient-to-r from-indigo-500 to-purple-500 
                              shadow-md sm:shadow-lg shadow-indigo-500/40" />

              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                B.Tech – Computer Science & Engineering
              </h3>

              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/school/national-institute-of-technology-agartala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition font-medium"
                >
                  National Institute of Technology, Agartala
                </a>

                <a
                  href="https://www.linkedin.com/school/national-institute-of-technology-agartala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit NIT Agartala LinkedIn page"
                  className="text-blue-500 hover:scale-110 transition"
                >
                  <FaLinkedin size={14} aria-hidden="true" />
                </a>
              </div>

              <p className="text-gray-400 mt-3 text-sm">
                2021 – 2025
                <span className="mx-2 sm:mx-3 text-gray-600">•</span>
                CGPA{' '}
                <span className="text-white font-semibold">
                  8.83
                </span>
              </p>
            </motion.div>

            {/* Class XII */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-10 sm:pl-14"
            >
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 
                              rounded-full 
                              bg-gradient-to-r from-purple-500 to-pink-500 
                              shadow-md sm:shadow-lg shadow-purple-500/40" />

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                Class XII – CBSE
              </h3>

              <p className="text-indigo-400 mt-2">
                Gurukul Vidyapeeth, Bihar
              </p>

              <p className="text-gray-400 mt-2 text-sm">
                2019 – 2020
                <span className="mx-2 sm:mx-3 text-gray-600">•</span>
                Percentage{' '}
                <span className="text-white font-semibold">
                  91.4%
                </span>
              </p>
            </motion.div>

            {/* Class X */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-10 sm:pl-14"
            >
              <div className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 
                              rounded-full 
                              bg-gradient-to-r from-pink-500 to-indigo-500 
                              shadow-md sm:shadow-lg shadow-pink-500/40" />

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                Class X – CBSE
              </h3>

              <p className="text-indigo-400 mt-2">
                B.D. Public School, Bihar
              </p>

              <p className="text-gray-400 mt-2 text-sm">
                2017 – 2018
                <span className="mx-2 sm:mx-3 text-gray-600">•</span>
                Percentage{' '}
                <span className="text-white font-semibold">
                  93.17%
                </span>
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Education