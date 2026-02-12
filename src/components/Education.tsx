import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-indigo-500"
        >
          Education
        </motion.h2>

        <div className="space-y-10">

          {/* B.Tech */}
            
            <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
>
  <h3 className="text-xl font-semibold">
    B.Tech – Computer Science & Engineering
  </h3>

  <div className="flex items-center gap-2 justify-center mt-1">
    <a
      href="https://www.linkedin.com/school/national-institute-of-technology-agartala/"
      target="_blank"
      className="text-indigo-400 hover:underline"
    >
      National Institute of Technology, Agartala
    </a>

    <a
      href="https://www.linkedin.com/school/national-institute-of-technology-agartala/"
      target="_blank"
      className="text-blue-500 hover:scale-110 transition"
    >
      <FaLinkedin size={18} />
    </a>
  </div>

  <p className="text-gray-400 mt-2">
    2021 – 2025 | CGPA:{" "}
    <span className="text-white font-semibold">8.83</span>
  </p>
</motion.div>

          {/* Class XII */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold">
              Class XII – CBSE
            </h3>
            <p className="text-indigo-400">
              Gurukul Vidyapeeth, Bihar
            </p>
            <p className="text-gray-400">
              2019 – 2020 | Percentage: <span className="text-white font-semibold">91.4%</span>
            </p>
          </motion.div>

          {/* Class X */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold">
              Class X – CBSE
            </h3>
            <p className="text-indigo-400">
              B.D. Public School, Bihar
            </p>
            <p className="text-gray-400">
              2017 – 2018 | Percentage: <span className="text-white font-semibold">93.17%</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Education