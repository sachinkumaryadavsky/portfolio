import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-28 bg-gray-950 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-5xl leading-[1.15] pb-1 font-black mb-16 text-center 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Competitive Programming
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LeetCode Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl 
                       border border-gray-800 hover:border-yellow-500 
                       transition shadow-xl"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-14 mx-auto mb-6"
            />

            <h3 className="text-2xl font-semibold mb-3 text-yellow-400 text-center">
              LeetCode
            </h3>

            <p className="text-gray-400 text-center mb-3">
              Knight · Max Rating{' '}
              <span className="text-white font-semibold">
                <CountUp end={1898} duration={2} />
              </span>
            </p>

            <p className="text-center mb-6">
              <span className="text-4xl font-bold text-yellow-400">
                <CountUp end={1150} duration={2} />+
              </span>
              <span className="block text-gray-400 mt-2">Problems Solved</span>
            </p>

            <div className="text-center">
              <a
                href="https://leetcode.com/u/Winter_Soldier_2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-yellow-500 text-black rounded-xl 
                           hover:bg-yellow-400 transition"
              >
                View Profile
              </a>
            </div>
          </motion.div>

          {/* GFG Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl 
                       border border-gray-800 hover:border-green-500 
                       transition shadow-xl"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GFG"
              className="w-16 mx-auto mb-6"
            />

            <h3 className="text-2xl font-semibold mb-3 text-green-400 text-center">
              GeeksforGeeks
            </h3>

            <p className="text-center mb-6">
              <span className="text-4xl font-bold text-green-400">
                <CountUp end={400} duration={2} />+
              </span>
              <span className="block text-gray-400 mt-2">Problems Solved</span>
            </p>

            <div className="text-center">
              <a
                href="https://www.geeksforgeeks.org/profile/sachinkumaryadav"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-black rounded-xl 
                           hover:bg-green-400 transition"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
